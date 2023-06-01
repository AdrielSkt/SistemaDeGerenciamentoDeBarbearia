import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonModal, IonSlides, LoadingController } from '@ionic/angular';
import { Barbeiro } from 'src/app/models/barbeiro-model';
import { FormularioMarcacao } from 'src/app/models/formulario-marcacao-model';
import { Servico } from 'src/app/models/servicos-model';
import { ServicoSelect } from 'src/app/models/servicos-user-select';
import { BarbeirosService } from 'src/app/service/barbeiros.service';
import { FormulariosService } from 'src/app/service/formulario.service';
import { ServicosService } from 'src/app/service/servicos.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper: IonSlides | undefined;
  @ViewChild(IonModal) modal: IonModal | undefined;
  sliderBarberOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  sliderServiceOptions = {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    }

  };
  formulario: FormularioMarcacao = {
    //id: '',
    nomeCliente: '',
    idBarbeiro: '',
    data: '',
    hora: '',
    servicos: [],
    valor: 0
  }
  //Header
  chatText: string = 'Escolha teu barbeiro';
  //Selecao de barbeiros
  barbeiros: Barbeiro[] = [];
  allServicos: Servico[] = [];
  servicosUser: ServicoSelect[] = [];

  constructor(private navCtrl: NavController,private servicosService: ServicosService, private barbeirosService: BarbeirosService, private formulariosService: FormulariosService) { 
    const dataAtual = new Date();
    this.selectedDate = dataAtual.toISOString();
  }


  ngOnInit() {
    this.selectHorario = false;
    this.selectBarbeiro = false;
    this.obterServicos();
    this.obtemBarbeiros();
    this.onDateChange();



  }

  obtemBarbeiros() {
    this.barbeirosService.getAll().subscribe((result) => {
      result.forEach((item: any) => {
        const barbeiro: Barbeiro = {
          id: item.id,
          nome: item.nome,
          email: item.email,
          senha: item.senha,
          sobre: item.sobre,
          imagem: item.imagem,
          servicos: item.servicos,
          admin: false,
        }
        this.barbeiros.push(barbeiro);
      }
      );
      this.barberChange();
    });
  }

  obterServicos() {
    this.servicosService.getAll().subscribe((result) => {
      result.forEach((item: any) => {
        const servico: Servico = {
          id: item.id,
          nome: item.nome,
          valor: item.valor,
        }
        this.allServicos.push(servico)
      }
      )
    });

  }

  barberChange() {
    if (this.swiper) {
      this.swiper.getActiveIndex().then(activeIndex => {
        this.servicosUser = [];
        this.barberSelectedName = this.barbeiros[activeIndex].nome;
        this.formulario.idBarbeiro = this.barbeiros[activeIndex].id;
        this.barbeiros[activeIndex].servicos.forEach((servicoId) => {
          this.addServicesUser(servicoId);
        });

      });

    } else {
      this.formulario.idBarbeiro = this.barbeiros[0].id;
      this.barberSelectedName = this.barbeiros[0].nome;
      this.barbeiros[0].servicos.forEach((servicoId) => {
        this.addServicesUser(servicoId);
      });
    }
  }

  addServicesUser(id: string) {
    this.allServicos.forEach((servico) => {
      if (servico.id == id) {
        let servicoSelect: ServicoSelect = {
          id: servico.id,
          nome: servico.nome,
          valor: servico.valor,
          selecao: false,
        }
        this.servicosUser.push(servicoSelect);
      }

    });

  }
  escolheBarbeiro() {
    this.chatText = 'Selecione os serviços desejados!!'
    this.selectBarbeiro = true;
  }

  //SELECAO DE SERVICOS
    selectBarbeiro: boolean = false;
    valorFinal: number = 0;
    barberSelectedName: string = '';
    servicosEscolhidos: ServicoSelect[] = [];

  voltarParabarbeiros() {
    this.barbeiros = [];
    this.allServicos = [];
    this.obterServicos();
    this.obtemBarbeiros();
    this.selectBarbeiro = false;
    this.formulario.servicos = [];
    this.servicosEscolhidos = [];
    this.valorFinal = 0;
    this.chatText = 'Escolha teu barbeiro';
  }

  selecaoDeServico(selecao: ServicoSelect) {
    const index = this.servicosUser.findIndex(servico => selecao.id == servico.id);
    if (selecao.selecao == true) {
      this.servicosUser[index].selecao = false;
      this.valorFinal -= selecao.valor;
      this.formulario.servicos = this.formulario.servicos.filter(id => id != selecao.id);
      this.servicosEscolhidos = this.servicosEscolhidos.filter(servico => servico.id != selecao.id);

    } else if (selecao.selecao == false) {
      this.servicosUser[index].selecao = true;
      this.valorFinal = +this.valorFinal + +selecao.valor;
      this.formulario.servicos.push(selecao.id);
      this.servicosEscolhidos.push(selecao);
    }

  }

  confirmarServicos() {
    this.formulario.valor = this.valorFinal;
    this.selectHorario = true;
    this.selectBarbeiro = false;
    console.log(this.formulario)
  }

  //SELECAO DE HORARIOS
  selectedDate: string = '';
  selectHorario: boolean = false;
  listaFormulariosExist: FormularioMarcacao [] = [];
  horarioAtual = {id: 0, nome: ''};
  todosHorarios = [
    {id: 1, nome:'8:00'},
    {id: 2, nome:'9:00'},
    {id: 3, nome:'10:00'},
    {id: 4, nome:'11:00'},
    {id: 5, nome:'12:00'},
    {id: 6, nome:'13:00'},
    {id: 7, nome:'14:00'},
    {id: 8, nome:'15:00'},
    {id: 9, nome:'16:00'},
    {id: 10, nome:'17:00'} ];
    horariosPossiveis = this.todosHorarios;
    dataFormatada!: Date;
    voltarParaServicos(){
      this.selectBarbeiro = true;
      this.selectHorario = false;
      this.selectedDate = '';
      this.horarioAtual = {id: 0, nome: ''};
    }

  async onDateChange() {
     this.dataFormatada = new Date(this.selectedDate);
    this.listaFormulariosExist = [];
    this.horariosPossiveis = this.todosHorarios;
    await this.obtemFormularios(this.dataFormatada.toLocaleDateString("pt-BR").replace(/\//g, '-'));

     
  }

  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
  changeHorario(ev: any) {
    this.horarioAtual = ev.target.value;
    console.log(this.horarioAtual)
  }

  obtemFormularios(data: string) {
    this.formulariosService.getAll().subscribe((result) => {
      result.forEach((item: any) => {
        const formulario: FormularioMarcacao = {
          //id: item.id,
          nomeCliente: item.nomeCliente,
          idBarbeiro: item.idBarbeiro,
          data: item.data,
          hora: item.hora,
          servicos: item.servicos,
          valor: item.valor
        }
        if(data == formulario.data && this.formulario.idBarbeiro == formulario.idBarbeiro){
          this.verificaHorariosDisponiveis(formulario);
          this.listaFormulariosExist.push(formulario);
        }
        
      }
      );
    });
  }

  verificaHorariosDisponiveis(formulario: FormularioMarcacao){
    console.log(formulario);
    console.log("entrou");
      this.horariosPossiveis = this.horariosPossiveis.filter((horario)=> horario.nome !== formulario.hora)

  }

  finalizarPreenchimentoFormulario(){
    this.formulario.data = this.dataFormatada.toLocaleDateString("pt-BR").replace(/\//g, '-');
    if(this.horarioAtual){
      this.formulario.hora = this.horarioAtual.nome;
    }
    console.log(this.formulario)

  }

  async concluirMarcacao(){
    await this.formulariosService.create(this.formulario);
    if(this.modal)
    this.modal.dismiss(null, 'cancel');
    this.navCtrl.navigateRoot('home/home/agendamentos', { replaceUrl: true });
    
  }


}


