import { Component } from '@angular/core';
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
  usuarios: Usuario[] = []


  displayedColumns: string[] = ['nome', 'ações'];
  dataSource = this.usuarios;

  constructor(private router: Router, private usuarioService: UsuarioService) { }
  ngOnInit() {
    //chamada do metodo de listagem de usuario
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.getAll().then(result => {
      result.map((item: any) => {
        const usuario: Usuario = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.usuarios.push(usuario)
      })
    })
  }

  public editarUsuario(id: Number) {
    this.router.navigate(['usuario/edit', id])
  }

  public adicionarUsuario() {
    this.router.navigate(['usuario/create'])
  }

  public excluirUsuario(id: Number) {
    //Chamada para excluir usuario
    //Chamada de listagem de usuario para atualizar lista exibida

  }

}