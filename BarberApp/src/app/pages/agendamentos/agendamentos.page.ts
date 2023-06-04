import { Component, OnInit } from '@angular/core';
import { FormularioMarcacao } from 'src/app/models/formulario-marcacao-model';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { FormulariosService } from 'src/app/service/formulario.service';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {
  nomeCliente: string = '';
  idUser: string = '';
  FormHorariosMarcados: FormularioMarcacao [] = [];
  constructor(private authService: AuthService, private clienteService: ClienteService, private formularioService: FormulariosService) { }

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
  console.log("BUSCANDO FORM")
  this.formularioService.getAll().subscribe((result) => {
    this.FormHorariosMarcados = [];
    result.forEach((item: any) => {
      const formulario: FormularioMarcacao = {
        //id: item.id,
        nomeCliente: item.nomeCliente,
        idCliente: item.idCliente,
        nomeBarbeiro: item.nomeBarbeiro,
        idBarbeiro: item.idBarbeiro,
        data: item.data,
        hora: item.hora,
        servicos: item.servicos,
        valor: item.valor
      }
      console.log(formulario)
      if(formulario.idCliente == this.idUser){
        this.FormHorariosMarcados.push(formulario);
      }  
    }
    );
  });
}


}
