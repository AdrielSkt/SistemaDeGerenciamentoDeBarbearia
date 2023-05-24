import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgendarPageRoutingModule } from './agendar-routing.module';
import { AgendarPage } from './agendar.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarPageRoutingModule,
  ],
  declarations: [AgendarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AgendarPageModule {}
