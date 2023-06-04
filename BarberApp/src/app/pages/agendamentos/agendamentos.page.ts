import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {
  nomeCliente: string = '';
  constructor(private authService: AuthService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.buscarDadosCliente()
  }

  buscarDadosCliente() {
    const idCliente = this.authService.getCurrentUserId();
    if (idCliente) {
      this.clienteService.getDocById(idCliente).then((documentSnapshot) => {
        if (documentSnapshot.exists()) {
          const data = documentSnapshot.data();
          this.nomeCliente = data['nome'];
        } else {
          // Documento não encontrado
          console.log('Documento não encontrado.');
        }
      })

    }
  }

}
