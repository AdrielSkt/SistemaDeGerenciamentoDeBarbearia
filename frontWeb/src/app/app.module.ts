import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { FooterComponent } from './components/body/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { GerenciamentoDeHorariosComponent } from './components/gerenciamento-de-horarios/gerenciamento-de-horarios.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './components/login/login.component';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    MenuComponent,
    GerenciamentoDeHorariosComponent,
    LoginComponent






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
