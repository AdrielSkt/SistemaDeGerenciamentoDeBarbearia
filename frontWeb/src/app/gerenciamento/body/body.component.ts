import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
public rotas!: any[];
public rotaAtual!: String;
constructor(public route: Router){}

ngOnInit() {
  this.rotas = [
    {
      nome: 'Menu',
      rota: 'menu',
      icone: 'home'
    },
    {
      nome:'Gerenciamento de horarios',
      rota: 'gerenciar-marcacoes',
      icone: 'watch_later'
    },
    {
      nome: 'Gerenciamento de usuarios',
      rota: 'usuario/read',
      icone: 'people_alt'
    },
    {
      nome:'Gerenciamento de serviços',
      rota: 'menu',
      icone: 'content_cut'
    }

  ];
  // this.verificaRota();
}



  public acessarRota(rota:String): void{
    console.log(rota);
    this.route.navigate([rota]);
  }

// public verificaRota(): void{
//   this.route.events.subscribe((e: any) => {
//     console.log(e.routerEvent.url)
//       if(e.routerEvent.url == '/'){
//         this.rotaAtual = 'menu';
//       }else{
//         this.rotas.forEach((rota)=> {
//           if(rota.rota == e.routerEvent.url){
//             this.rotaAtual = rota.nome;

//           }
//         })
//       }
    

//   });
// }
}
