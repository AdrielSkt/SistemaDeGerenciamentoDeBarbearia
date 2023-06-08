import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarPage } from './navbar.page';

const routes: Routes = [

        {
          path: 'home',
          component: NavbarPage,
          children: [
            {
              path: 'menu',
              loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
            },
            {
              path: 'agendamentos',
              loadChildren: () => import('../agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
            },
            {
              path: 'agendar',
              loadChildren: () => import('../agendar/agendar.module').then( m => m.AgendarPageModule)
            },
            {
              path: 'perfil',
              loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
            },
            {
              path: 'sobre',
              loadChildren: () => import('../sobre/sobre.module').then( m => m.SobrePageModule)
            },
            {
              path: '',
              redirectTo: 'menu',
              pathMatch: 'full'
            },
      
          ]
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
       
      ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarPageRoutingModule {}
