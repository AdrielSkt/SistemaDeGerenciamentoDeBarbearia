import { Injectable } from "@angular/core";
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';


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

   createNewUser(id: string, cliente: any){
    const docRef = doc(this.firestore, this.collection + id);
    setDoc(docRef, cliente)
      .then(() => {
        console.log("Documento criado com ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Erro ao criar documento: ", error);
      });
  }

}