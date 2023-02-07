import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ServicosReadComponent } from './servicos-read/servicos-read.component';




const routes : Routes = [
    {path: 'read', component: ServicosReadComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicosRoutingModule{}