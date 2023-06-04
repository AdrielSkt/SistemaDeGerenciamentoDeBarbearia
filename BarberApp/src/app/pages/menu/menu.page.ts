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
  }


  buscarDadosCliente() {
    const idCliente = this.authService.getCurrentUserId();
    console.log(idCliente);
    if (idCliente) {

    }
  }

  irParaAgendar() {
    this.navCtrl.navigateRoot('home/home/agendar', { replaceUrl: true });
  }

  irParaAgendamentos() {
    this.navCtrl.navigateRoot('home/home/agendamentos', { replaceUrl: true });
  }
}
