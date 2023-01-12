import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosReadComponent } from './usuarios-read/usuarios-read.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    UsuariosReadComponent,
    UsuarioEditComponent,

  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UsuarioModule { }
