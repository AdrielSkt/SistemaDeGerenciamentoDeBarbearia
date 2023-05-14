import { Inject, Injectable } from "@angular/core";
import { AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import { Observable } from "rxjs";
import { User, updatePassword , updateEmail} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(AngularFireAuth) private fireAuth: AngularFireAuth) {}

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

  getCurrentUser(): Observable<any> {
    return this.fireAuth.user;
  }



  async alterarCredenciaisLogin(emailAdm: string, senhaAdm: string, emailOldUser: string, senhaOldUser: string, newEmailUser: string, newSenhaUser: string){
   console.log(emailAdm, senhaAdm, emailOldUser, senhaOldUser, newEmailUser, newSenhaUser);

    const loginsAlteracao = [{
      email: emailAdm,
      senha: senhaAdm
    },
    {
      email: emailOldUser,
      senha: senhaOldUser
    }];
    console.log(this.getCurrentUser());
    await this.signOut();
    await this.signIn(loginsAlteracao[1].email,loginsAlteracao[1].senha);
    
    await this.alteraEmail(newEmailUser);
    await this.signOut();
    console.log("POS MAIL");
    await this.signIn(newEmailUser,loginsAlteracao[0].senha);
    await  this.alteraPassword(newSenhaUser);

    await this.signOut();
    await this.signIn(loginsAlteracao[0].email,loginsAlteracao[0].senha);
    

      
  }





  private async alteraEmail(email: string): Promise<boolean> {
    await this.fireAuth.user.subscribe(user => {
      if (user) {
        updateEmail(user, email).then(() => {
          console.log('Email atualizada com sucesso!');
          return true;
        }).catch(error => {
          console.log('Ocorreu um erro ao atualizar o email:', error);
          return false;
        });
      }
    });
    return false;
  }

  private async alteraPassword(password: string): Promise<boolean> {
    await this.fireAuth.user.subscribe(user => {
      if (user) {
        updatePassword(user, password).then(() => {
          console.log('Senha atualizada com sucesso!');
          return true;
        }).catch(error => {
          console.log('Ocorreu um erro ao atualizar a senha:', error);
          return false;
        });
      }
    });
    return false;
  }
}