import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario-model/usuario-model';


@Component({
  selector: 'app-usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.scss']
})
export class UsuariosReadComponent {
public usuarios: Usuario[] = [
  {id: 1, nome: 'Adriel', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda',servicos: [{id: 1,nome: 'asd', valor: 2311, imagem: undefined }],sobre: 'menoooooooo'},
  {id: 2, nome: 'Caio', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda',servicos: [{id: 1,nome: 'asd', valor: 2311, imagem: undefined }],sobre: 'menoooooooo'},
  {id: 3, nome: 'Igor', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda',servicos: [{id: 1,nome: 'asd', valor: 2311, imagem: undefined }],sobre: 'menoooooooo'}
]


displayedColumns: string[] = [ 'nome', 'ações'];
dataSource = this.usuarios;

constructor(private router: Router){}
ngOnInit(){
}

// this.router.navigate(['usuario/edit'])
}
