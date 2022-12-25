import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
public image = "https://material.angular.io/assets/img/examples/shiba1.jpg";

public listaMenu!: any[];



constructor(public route: Router){}
ngOnInit() {
  this.listaMenu = [
    {
      imagem: "assets/horario.png",
      titulo: "Gerenciamento de Horarios",
      descricao: 'Gerencie as solicitações e os horarios marcados',
      rota: ''

    },
    {
      imagem: "assets/usuario.png",
      titulo: "Gerenciamento de Usuarios",
      descricao: "Gerencie os barbeiros cadastrados no sistema",
      rota: 'usuario/read'

    },
    {
      imagem: "assets/servicos.jpeg",
      titulo: "Gerenciamento de Serviços",
      descricao: "Gerencie os serviços prestados pelos barbeiros",
      rota: ''

    }
  ];
}

public acessarRota(rota: String): void{
  this.route.navigate([rota]);
}


}
