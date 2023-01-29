import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
public rotas!: any[];
public rotaAtual!: String;

ngOnInit() {
  this.verificaRota();
  this.rotas = [
    {
      nome: 'Menu',
      rota: '',
      icone: 'home'
    },
    {
      nome:'Gerenciamento de horarios',
      rota: '/gerenciar-marcacoes',
      icone: 'watch_later'
    },
    {
      nome: 'Gerenciamento de usuarios',
      rota: '/usuario/read',
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

  public acessarRota(rota:String): void{
    this.route.navigate([rota]);
  }

public verificaRota(): void{
  this.route.events.subscribe((e: any) => {
    if (e instanceof NavigationEnd) {
      if(e.url == '/'){
        this.rotaAtual = 'Menu';
      }else{
        this.rotas.forEach((rota)=> {
          if(rota.rota == e.url){
            this.rotaAtual = rota.nome;

          }
        })
      }

    }
  });
}
}
