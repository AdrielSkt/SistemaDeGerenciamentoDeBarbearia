import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
public rotas!: any[];


ngOnInit() {
  this.rotas = [
    {
      nome: 'Menu',
      rota: '',
      icone: 'home'
    },
    {
      nome:'Gerenciamento de serviços',
      rota: '',
      icone: 'watch_later'
    },
    {
      nome: 'Gerenciamento de usuarios',
      rota: 'usuario/read',
      icone: 'people_alt'
    },
    {
      nome:'Gerenciamento de serviços',
      rota: '',
      icone: 'content_cut'
    }

  ];
}

  constructor(public route: Router){}

  public acessarRota(rota: String): void{
    this.route.navigate([rota]);
  }



}
