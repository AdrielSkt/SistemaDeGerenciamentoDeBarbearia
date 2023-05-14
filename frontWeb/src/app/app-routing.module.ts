import { GerenciamentoDeHorariosComponent } from './gerenciamento/gerenciamento-de-horarios/gerenciamento-de-horarios.component';
import { MenuComponent } from './gerenciamento/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: RegistrarComponent},
  {path: 'gerencimento', loadChildren: () => import('./gerenciamento/gerenciamento.module').then(x =>x.GerenciamentoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
