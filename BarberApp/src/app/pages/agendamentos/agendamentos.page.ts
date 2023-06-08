import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormularioMarcacao } from 'src/app/models/formulario-marcacao-model';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { FormulariosService } from 'src/app/service/formulario.service';
import { ServicosService } from 'src/app/service/servicos.service';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {
  nomeCliente: string = '';
  idUser: string = '';
  FormHorariosMarcados: FormularioMarcacao [] = [];
  constructor(private authService: AuthService, 
              private clienteService: ClienteService, 
              private formularioService: FormulariosService, 
              private servicosService: ServicosService,
              private alertController: AlertController
  ) { }

  ngOnInit() {
    this.buscarDadosCliente();

   
  }

  async buscarDadosCliente() {
    const idCliente = this.authService.getCurrentUserId();
    if (idCliente) {
      this.clienteService.getDocById(idCliente).then((documentSnapshot) => {
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          this.nomeCliente = data['nome'];
          this.idUser = idCliente;
          this.FormHorariosMarcados = [];
          this.buscarFormulariosMarcados();
        } else {
          // Documento não encontrado
          console.log('Documento não encontrado.');
        }
      })
    }
  }

buscarFormulariosMarcados(){
  this.formularioService.getAll().subscribe((result) => {
    this.FormHorariosMarcados = [];
    result.forEach((item: any) => {
      const formulario: FormularioMarcacao = {
        id: item.id,
        nomeCliente: item.nomeCliente,
        idCliente: item.idCliente,
        nomeBarbeiro: item.nomeBarbeiro,
        idBarbeiro: item.idBarbeiro,
        data: item.data,
        hora: item.hora,
        servicos: [],
        valor: item.valor
      };
      item.servicos.forEach(async (id: string)=>{
        formulario.servicos.push(await this.buscarServico(id));
      })
      if(formulario.idCliente == this.idUser){
        this.FormHorariosMarcados.push(formulario);
      }  
    }
    );
  });
}

  async buscarServico(id: string): Promise<string> {
  let nomeServico: string  = '';
  await this.servicosService.getDocById(id).then((documentSnapshot) => {
    if (documentSnapshot.exists()) {
      const data = documentSnapshot.data();
      nomeServico = data['nome'];
    } else {
      // Servico não encontrado
      console.log('Serviço não encontrado.');
    }
  });
  return nomeServico;
}


  async deletarHorario(id: string){
  this.formularioService.deleteDoc(id);
  const alert = await this.alertController.create({
    header: 'REGISTRO EXCLUIDO',
    subHeader: 'Serviço cancelado',
    message: 'O horario marcado foi excuido com sucesso!',
    buttons: ['OK'],
  });
  await alert.present();
}


}
