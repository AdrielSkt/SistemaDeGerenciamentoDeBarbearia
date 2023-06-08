import { Injectable } from "@angular/core";
import { doc, Firestore, getDoc } from "@angular/fire/firestore";



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private collection: String = '';
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