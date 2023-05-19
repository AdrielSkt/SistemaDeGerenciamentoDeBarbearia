import { Inject, Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { Observable } from "rxjs";
import { User, updatePassword, updateEmail } from 'firebase/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(AngularFireAuth) private fireAuth: AngularFireAuth) { }

  async signIn(email: string, senha: string): Promise<boolean> {
    try {
      const { user } = await this.fireAuth.signInWithEmailAndPassword(email, senha);
      console.log("Usuário autenticado com sucesso.", user?.uid);
      return true;
    } catch (error) {
      console.log("Ocorreu um erro ao autenticar o usuário:", error);
      return false;
    }
  }



  async registrar(email: string, senha: string): Promise<firebase.User | null> {
    try {
      const { user } = await this.fireAuth.createUserWithEmailAndPassword(email, senha);
      console.log("Usuário registrado com sucesso.");
      return user;
    } catch (error) {
      console.log("Ocorreu um erro ao registrar o usuário:", error);
      return null;
    }
  }


  async signOut(): Promise<boolean> {
    try {
      await this.fireAuth.signOut();
      console.log("Usuário desconectado com sucesso.");
      return true;
    } catch (error) {
      console.log("Ocorreu um erro ao desconectar o usuário:", error);
      return false;
    }
  }

  getCurrentUserId(): Observable<string | undefined> {
    return this.fireAuth.user.pipe(
      map(user => user ? user.uid : undefined)
    );
  }

  getCurrentUser(): Observable<any> {
    return this.fireAuth.user;
  }



  async atualizarCredenciais(email: string, senha: string): Promise<boolean> {
    try {
      const user = await this.fireAuth.currentUser;
      if (user) {
        await user.updateEmail(email);
        await user.updatePassword(senha);
        console.log('Credenciais atualizadas com sucesso!');
        return true;
      } else {
        console.log('Usuário não está autenticado.');
        return false;
      }
    } catch (error) {
      console.log('Ocorreu um erro ao atualizar as credenciais:', error);
      return false;
    }
  }
  
}