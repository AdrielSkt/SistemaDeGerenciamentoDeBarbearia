import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { GerenciamentoDeHorariosComponent } from './gerenciamento-de-horarios/gerenciamento-de-horarios.component';
import { MenuComponent } from './menu/menu.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';



const routes : Routes = [
  {path: '', component: BodyComponent, children: [
    {path: 'menu', component: MenuComponent },
    {path: 'gerenciar-marcacoes/:id', component: GerenciamentoDeHorariosComponent},
    {path: 'usuario/:id', component: UsuarioEditComponent},
    { path: '**', redirectTo: 'menu' }
  ]},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GerenciamentoRoutingModule{}
