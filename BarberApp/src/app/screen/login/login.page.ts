import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
email: string = '';
senha: string = '';

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }


  async logar(){
    try{
      await this.authService.login(this.email, this.senha);
      this.router.navigateByUrl('/home')
    }catch{
        const alert = await this.alertController.create({
          header: 'Erro',
          subHeader: 'Credenciais invalidas',
          message: 'email ou senha estão incorretos!',
          buttons: ['OK'],
        });
        await alert.present();
    }

  }
}
