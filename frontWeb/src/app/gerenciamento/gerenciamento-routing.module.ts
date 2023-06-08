import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { GerenciamentoDeHorariosComponent } from './gerenciamento-de-horarios/gerenciamento-de-horarios.component';
import { MenuComponent } from './menu/menu.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { GerenciamentoDeServicosComponent } from './gerenciamento-de-servicos/gerenciamento-de-servicos.component';
import { EditarAdicionarServicoComponent } from './gerenciamento-de-servicos/editar-adicionar-servico/editar-adicionar-servico.component';



const routes: Routes = [
  { path: '', component: BodyComponent, children: [
    { path: 'menu', component: MenuComponent },
    { path: 'gerenciar-marcacoes/:id', component: GerenciamentoDeHorariosComponent },
    { path: 'usuario/:id', component: UsuarioEditComponent },
    { path: 'servicos', component: GerenciamentoDeServicosComponent},
    { path: 'servicos/edit/:id', component: EditarAdicionarServicoComponent },
    { path: 'servicos/adicionar', component: EditarAdicionarServicoComponent },
    { path: '**', redirectTo: 'menu' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GerenciamentoRoutingModule{}
