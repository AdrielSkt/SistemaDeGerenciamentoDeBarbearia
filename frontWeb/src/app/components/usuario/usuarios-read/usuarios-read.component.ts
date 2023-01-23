import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario-model/usuario-model';
import { ListagemUsuarios } from '../usuario-model/usuarios-listagem-model';


@Component({
  selector: 'app-usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.scss']
})
export class UsuariosReadComponent {
public usuarios: ListagemUsuarios[] = [
  {id: 1, nome: 'Adriel',imagem: undefined},
  {id: 2, nome: 'Caio',imagem: undefined},
  {id: 3, nome: 'Igor',imagem: undefined}
]


displayedColumns: string[] = [ 'nome', 'ações'];
dataSource = this.usuarios;

constructor(private router: Router){}
ngOnInit(){
}

public editarUsuario(id: Number){
  this.router.navigate(['usuario/edit', id])
}

public adicionarUsuario(){
  this.router.navigate(['usuario/create'])
}

}
