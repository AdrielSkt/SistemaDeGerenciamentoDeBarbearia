import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  nomeCliente: string = '';
  constructor(private authService: AuthService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.buscarDadosCliente();
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
