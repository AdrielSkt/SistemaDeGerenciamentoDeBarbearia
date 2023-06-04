import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData, doc, docData, getDoc } from '@angular/fire/firestore';
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private collection: string = 'servicos/';
  constructor(private firestore: Firestore) {

  }
  docRef(path: string){
    return doc(this.firestore, this.collection+path);
  }
  getAll(): Observable<any[]> {
    const query = collection(this.firestore, this.collection);
    return collectionData(query, { idField: 'id' });
  }

   getDocById(path: string){
       const dataRef = this.docRef(path);
       console.log(dataRef.id);
       return getDoc(dataRef);
   }

}