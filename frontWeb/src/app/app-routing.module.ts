import { GerenciamentoDeHorariosComponent } from './components/gerenciamento-de-horarios/gerenciamento-de-horarios.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'gerenciar-marcacoes', component: GerenciamentoDeHorariosComponent},
  {path: 'usuario', loadChildren: () => import('./components/usuario/usuario.module').then(x =>x.UsuarioModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
