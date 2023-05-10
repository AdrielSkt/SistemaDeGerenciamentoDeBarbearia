import { Inject, inject, Injectable } from "@angular/core";
import { Action, AngularFirestore, DocumentChangeAction, DocumentSnapshot, QuerySnapshot } from "@angular/fire/compat/firestore";
import { firstValueFrom, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private firestore = inject(AngularFirestore)
  private collection: String

  constructor(collection: String) {
    this.collection = collection
  }

  create(data: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection(this.collection.toString())
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getAll() {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection(this.collection.toString()).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots)
        })
    })
  }

  getOne(id: string): Promise<Action<DocumentSnapshot<unknown>>> {
    return firstValueFrom(this.firestore.collection(this.collection.toString()).doc(id).snapshotChanges())
  }
  
  update(id: string, data: any): Promise<void> {
    return this.firestore.collection(this.collection.toString()).doc(id).set(data)
  }

  delete(id: string): Promise<void> {
    return this.firestore.collection(this.collection.toString()).doc(id).delete()
  }

}