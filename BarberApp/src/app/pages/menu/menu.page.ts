import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
irParaAgendar(){
  this.navCtrl.navigateRoot('home/home/agendar', { replaceUrl: true });
}

irParaAgendamentos(){
  this.navCtrl.navigateRoot('home/home/agendamentos', { replaceUrl: true });
}
}
