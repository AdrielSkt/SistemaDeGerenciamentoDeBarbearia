import { Injectable } from "@angular/core";
import { Firestore, doc, getDoc } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private collection: string = 'clientes/';
  constructor(private firestore: Firestore) {

  }
  docRef(path: string){
    return doc(this.firestore, this.collection+path);
  }

   getDocById(path: string){
       const dataRef = this.docRef(path);
       console.log(dataRef.id);
       return getDoc(dataRef);
   }

}