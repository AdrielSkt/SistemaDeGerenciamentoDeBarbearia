import { Injectable } from '@angular/core';
import {  } from "@angular/fire/database"
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
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