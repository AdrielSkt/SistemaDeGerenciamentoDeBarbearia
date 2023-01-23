import { UsuariosReadComponent } from './usuarios-read/usuarios-read.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';



const routes : Routes = [
  {path: 'read', component: UsuariosReadComponent},
  {path: 'create',  component: UsuarioEditComponent},
  {path: 'edit/:id', component: UsuarioEditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuarioRoutingModule{}
