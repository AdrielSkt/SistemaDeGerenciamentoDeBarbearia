import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosReadComponent } from './servicos-read/servicos-read.component';





import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicosReadComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule,
    MatProgressBarModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class ServicosModule { }
