import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
public rotas!: any[];
public userId: string;

constructor(public route: Router, private authService: AuthService){}

ngOnInit() {
  this.authService.getCurrentUserId().subscribe((id)=>{
    if(id)
    this.userId = id; 
  });


  this.rotas = [
    {
      nome: 'Menu',
      rota: 'menu',
      icone: 'home'
    },
    {
      nome:'Gerenciamento de Horarios',
      rota: 'gerenciar-marcacoes',
      icone: 'watch_later'
    },
    {
      nome: 'Gerenciamento do Perfil',
      rota: 'usuario',
      icone: 'people_alt'
    },
    {
      nome:'Gerenciamento de serviços',
      rota: 'servicos',
      icone: 'content_cut'
    }

  ];

}



public acessarRota(rota: String): void{
  console.log(rota);
  if(rota != undefined){
    if(rota == 'usuario'){
      this.route.navigate([rota, this.userId]);
    }else if(rota == 'gerenciar-marcacoes'){
      this.route.navigate([rota, this.userId]);
    } else{
      this.route.navigate([rota]);
    }
    
  }

}


}
