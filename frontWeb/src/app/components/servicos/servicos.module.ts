import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosReadComponent } from './servicos-read/servicos-read.component';



@NgModule({
  declarations: [
    ServicosReadComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
