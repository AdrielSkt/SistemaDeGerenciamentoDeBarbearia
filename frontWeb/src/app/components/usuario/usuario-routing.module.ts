import { UsuariosReadComponent } from './usuarios-read/usuarios-read.component';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';



const routes : Routes = [
  {path: 'read', component: UsuariosReadComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsuarioRoutingModule{}
