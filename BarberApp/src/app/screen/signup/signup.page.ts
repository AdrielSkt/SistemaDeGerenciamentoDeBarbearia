import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  nome: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private clienteService: ClienteService, private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  async registrar() {
    //Deve se criar validação em registros e login para que não se logue em conta de barbeiro no app e com conta de cliente em Web
    const id = await this.authService.registrar(this.email, this.senha);
    if (id != null) {
      const obj = {
        email: this.email,
        nome: this.nome,
        senha: this.senha
      }
      this.clienteService.createNewUser(id, obj);
      const alert = await this.alertController.create({
        header: 'SUCESSO',
        subHeader: 'Usuario cadastrado com sucesso!',
        message: 'Agora você pode logar e desfrutar do nosso app!',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.ngOnDestroy();
      this.router.navigateByUrl('/login');
      
    }
  }

}
