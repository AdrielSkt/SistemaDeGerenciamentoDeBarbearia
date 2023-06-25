import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
public image = "https://material.angular.io/assets/img/examples/shiba1.jpg";

public listaMenu!: any[];
public userId: string;


constructor(public route: Router, private authService: AuthService){}
ngOnInit() {
  this.authService.getCurrentUserId().subscribe((id)=>{
    if(id)
    this.userId = id;

    
  });

  this.listaMenu = [
    {
      imagem: "assets/horario.png",
      titulo: "Gerenciamento de Horarios",
      descricao: 'Gerencie as solicitações e os horarios marcados',
      rota: 'gerenciar-marcacoes'

    },
    {
      imagem: "assets/usuario.png",
      titulo: "Gerenciamento do Perfil ",
      descricao: "Editar os dados do Barbeiro",
      rota: 'usuario'

    },
    {
      imagem: "assets/servicos.jpeg",
      titulo: "Gerenciamento de Serviços",
      descricao: "Gerencie os serviços prestados pelos barbeiros",
      rota: 'servicos'

    }
  ];
}

public acessarRota(rota: String): void{
  console.log(rota);
  if(rota != undefined){
    if(rota == 'menu' || rota == 'servicos'){
      this.route.navigate([rota]);
    }else{
      this.route.navigate([rota, this.userId]);
      
    }
    
  }

}


}
