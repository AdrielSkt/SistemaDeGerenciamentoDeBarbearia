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
export class UsuarioService extends CrudService {

  constructor() {
    super('usuarios');
  }


  // getAll(): Usuario[] {
  //   let reqGet = ref( this.dbPath);
  //   let usuarios: Usuario[] = [];
  //   onValue(reqGet, (snapshot) => {
  //     snapshot.forEach((childSnapshot) => {
  //       let usuario!: Usuario;
  //       if (childSnapshot.key != null) {
  //         usuario.id = childSnapshot.key;
  //         usuario = Object.create(childSnapshot.val());
  //         usuarios.push(usuario);
  //       }
  //       console.log(usuarios);
  //     });
  //   }, {
  //     onlyOnce: true
  //   });
  //   return usuarios;
  // }



  // obterUsuarios(): ListagemUsuarios[] {
  //   let reqGet = ref(this.db, this.dbPath);
  //   let usuarios: ListagemUsuarios[] = [];
  //   let user: ListagemUsuarios;
  //   onValue(reqGet, (snapshot) => {

  //     const data = snapshot.val();

  //     console.log(data)
  //   });
  //   return usuarios;
  // }

}