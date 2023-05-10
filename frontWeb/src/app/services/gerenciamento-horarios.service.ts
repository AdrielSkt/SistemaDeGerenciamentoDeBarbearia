import { Injectable } from '@angular/core';
import { getDatabase, ref, onValue } from "firebase/database";
import {  } from "@angular/fire/database"
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario-model';
import { Observable } from 'rxjs';
import { ListagemUsuarios } from '../models/usuarios-listagem-model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CrudService } from './crud.service';
initializeApp(environment.firebase);
@Injectable({
  providedIn: 'root'
})
export class GerenciamentoHorariosService extends CrudService {

  constructor() {
    super('formulario-marcacao');
  }

}