import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { GerenciamentoDeHorariosComponent } from './gerenciamento-de-horarios/gerenciamento-de-horarios.component';
import { MenuComponent } from './menu/menu.component';



const routes : Routes = [
  {path: '', component: BodyComponent, children: [
    {path: 'menu', component: MenuComponent },
    {path: 'gerenciar-marcacoes', component: GerenciamentoDeHorariosComponent},
    {path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(x =>x.UsuarioModule)},
    { path: '**', redirectTo: 'menu' }
  ]},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GerenciamentoRoutingModule{}
