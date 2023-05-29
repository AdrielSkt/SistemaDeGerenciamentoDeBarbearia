import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController } from '@ionic/angular';
import { Barbeiro } from 'src/app/models/barbeiro-model';
import { Servico } from 'src/app/models/servicos-model';
import { ServicoSelect } from 'src/app/models/servicos-user-select';
import { BarbeirosService } from 'src/app/service/barbeiros.service';
import { ServicosService } from 'src/app/service/servicos.service';




@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  @ViewChild('swiper', { static: false }) swiper: IonSlides | undefined;

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


  barbeiros: Barbeiro[] = [];
  allServicos: Servico[] = [];
  servicosUser: ServicoSelect[] = []; 
  selectBarbeiro: boolean = false;
  valorFinal: number = 0;
  constructor(private servicosService: ServicosService, private barbeirosService: BarbeirosService) { }


  ngOnInit() {

    this.selectBarbeiro = false;
    this.obterServicos();
    this. obtemBarbeiros();
 
    

  }
  
  obtemBarbeiros(){
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
      this.UserChange();
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

  UserChange() {
    if (this.swiper) {
      this.swiper.getActiveIndex().then(activeIndex => {
        this.servicosUser = [];
        this.barbeiros[activeIndex].servicos.forEach((servicoId)=>{
          this.addServicesUser(servicoId);
        });
        
      });
      
    }else{
      this.barbeiros[0].servicos.forEach((servicoId)=>{
        this.addServicesUser(servicoId);
      });
    }
  }

  addServicesUser(id: string){
    this.allServicos.forEach((servico)=>{
      if(servico.id == id){
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
  escolheBarbeiro(){
    this.selectBarbeiro = true;
  }

  //SELECAO DE SERVICOS
  voltarParabarbeiros(){
    this.barbeiros = [];
    this.allServicos = [];
    this.selectBarbeiro = false;
    this.obterServicos();
    this. obtemBarbeiros();
    this.valorFinal = 0;
  }

  activated(selecao: ServicoSelect){
    const index = this.servicosUser.findIndex(servico=> selecao.id == servico.id);
    if(selecao.selecao == true){
      this.servicosUser[index].selecao = false;
      this.valorFinal -= selecao.valor;

    }else if(selecao.selecao == false){
      this.servicosUser[index].selecao = true;
      this.valorFinal = +this.valorFinal + +selecao.valor;
    }
    

  }

}


