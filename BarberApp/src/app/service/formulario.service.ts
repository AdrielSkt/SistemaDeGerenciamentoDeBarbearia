import { Injectable } from "@angular/core";
import { Firestore, collection, collectionData, doc, getDoc, addDoc, DocumentReference  } from '@angular/fire/firestore';
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

  getAll(): Observable<any[]> {
    const query = collection(this.firestore, this.collection);
    return collectionData(query, { idField: 'id' });
  }

   getDocById(path: string){
       const dataRef = this.docRef(path);
       console.log(dataRef.id);
       return getDoc(dataRef);
   }




   

  getDocById2(path: string){
    const dataRef = this.docRef(path);

    return getDoc(dataRef).then((documentSnapshot) => {
      if (documentSnapshot.exists()) {
        const data = documentSnapshot.data();
        // Faça o processamento dos dados aqui
        console.log(data);
        return data;
      } else {
        // Documento não encontrado
        console.log('Documento não encontrado.');
        return null;
      }
    }).catch((error) => {
      // Lidar com erros
      console.error('Erro ao obter o documento:', error);
      throw error;
    });
  }

}