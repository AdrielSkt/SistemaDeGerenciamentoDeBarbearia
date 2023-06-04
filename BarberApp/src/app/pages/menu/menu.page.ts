import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  nomeCliente: string = '';
  constructor(private navCtrl: NavController, private authService: AuthService, private clienteService: ClienteService) { }

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

  irParaAgendar() {
    this.navCtrl.navigateRoot('home/home/agendar');
  }

  irParaAgendamentos() {
    this.navCtrl.navigateRoot('home/home/agendamentos');
  }
}
