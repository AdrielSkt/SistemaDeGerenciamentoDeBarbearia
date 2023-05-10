import { Component, } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { map } from 'rxjs/operators';
import { ListagemUsuarios } from '../../../models/usuarios-listagem-model';
import { Usuario } from 'src/app/models/usuario-model';


@Component({
  selector: 'app-usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.scss']
})
export class UsuariosReadComponent {
  usuarios: ListagemUsuarios[] = [];


  displayedColumns: string[] = ['nome', 'ações'];
  dataSource: ListagemUsuarios[];
  
  constructor(private router: Router, private usuarioService: UsuarioService) { }
  ngOnInit() {
    //chamada do metodo de listagem de usuario
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.getAll().then(result => {
      result.map((item: any) => {
        const usuario: ListagemUsuarios = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.usuarios.push(usuario)
      })
      this.dataSource = this.usuarios;
    });
  }

  public editarUsuario(id: String) {
    this.router.navigate(['usuario/edit', id])
  }

  public adicionarUsuario() {
    this.router.navigate(['usuario/create'])
  }

  public excluirUsuario(id: string) {
    this.usuarioService.delete(id).then(() => {
      this.usuarios = [];
      this.buscarUsuarios();
    });
    
    //Chamada de listagem de usuario para atualizar lista exibida

  }

}