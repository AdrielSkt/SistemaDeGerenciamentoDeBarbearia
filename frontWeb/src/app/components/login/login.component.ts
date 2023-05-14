import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import {MatDialog} from '@angular/material/dialog' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})

export class LoginComponent implements OnInit {
  public formularioLogin!: FormGroup;
  
  constructor( private formBuilder: FormBuilder, private autService: AuthService, private router: Router, public dialog: MatDialog) {

  }

  
  ngOnInit(): void {
    this.criaFormulario();

  }
  public hide = true;




criaFormulario(): void {
  this.formularioLogin = this.formBuilder.group({
    email: ['',Validators.required],
    senha: ['', Validators.required],

  });
}


  async login(){
 if(await this.autService.signIn(this.formularioLogin.value.email,this.formularioLogin.value.senha)){
    this.router.navigateByUrl('gerencimento');
  }else{
    console.log("Erro ao efetuar login");
    this.dialog.open(DialogErrorSenha);
  }
}
}

@Component({
  selector: 'dialog-error-senha',
  templateUrl: 'dialog-error-senha.html',
})
export class DialogErrorSenha {}





