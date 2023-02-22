import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { ListagemUsuarios } from '../../../models/usuarios-listagem-model';


@Component({
  selector: 'app-usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.scss']
})
export class UsuariosReadComponent {
public usuarios: ListagemUsuarios[] = []


displayedColumns: string[] = [ 'nome', 'ações'];
dataSource = this.usuarios;

constructor(private router: Router, private usuarioService: UsuarioService){}
ngOnInit(){
  //chamada do metodo de listagem de usuario
  this.buscarUsuarios();
}

buscarUsuarios(){
  this.usuarios = this.usuarioService.obterUsuarios();
  console.log(this.usuarios);

}

public editarUsuario(id: Number){
  this.router.navigate(['usuario/edit', id])
}

public adicionarUsuario(){
  this.router.navigate(['usuario/create'])
}

public excluirUsuario(id: Number){
  //Chamada para excluir usuario
  //Chamada de listagem de usuario para atualizar lista exibida

}

}