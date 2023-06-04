import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData, doc, getDoc, addDoc, DocumentReference, deleteDoc  } from '@angular/fire/firestore';
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class FormulariosService {
  private collection: string = 'formulario-marcacao/';
  constructor(private firestore: Firestore) {

  }
  
  docRef(path: string){
    return doc(this.firestore, this.collection+path);
  }

  create(data: any): Promise<DocumentReference<any>> {
    return addDoc(collection(this.firestore, this.collection), data);
  }

  deleteDoc(path: string): Promise<void> {
    const docReference = this.docRef(path);
    return deleteDoc(docReference);
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