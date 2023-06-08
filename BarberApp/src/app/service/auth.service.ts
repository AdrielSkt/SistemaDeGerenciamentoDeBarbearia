import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  appVerifier: any;
  confirmationResult: any;

  constructor(
    private _fireAuth: Auth
  ) { }

  async login(email: string, senha: string) {
    try {
      const confirmationResult = await signInWithEmailAndPassword(this._fireAuth, email, senha);
      this.confirmationResult = confirmationResult;
      return confirmationResult;
    } catch(e) {
      throw(e);
    }
  }

  async registrar(email: string, senha: string) {
    try {
      const confirmationResult = await createUserWithEmailAndPassword(this._fireAuth, email, senha);
      this.confirmationResult = confirmationResult;
      return confirmationResult.user.uid;
    } catch(e) {
      throw(e);
    }
  }

  getCurrentUserId(): string | undefined {
    return this._fireAuth.currentUser?.uid;
  
  }

  async logOut(){
    await signOut(this._fireAuth);
    console.log(this.getCurrentUserId());
  }

}
