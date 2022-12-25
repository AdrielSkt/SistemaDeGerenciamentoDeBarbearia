import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosReadComponent } from './usuarios-read/usuarios-read.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    UsuariosReadComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
