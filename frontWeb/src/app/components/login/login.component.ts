import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})

export class LoginComponent implements OnInit {
  public formularioLogin!: FormGroup;
  
  constructor( private formBuilder: FormBuilder, private autService: AuthService) {

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


login(){
  console.log(this.formularioLogin.getRawValue());
  this.autService.signIn(this.formularioLogin.value.email,this.formularioLogin.value.senha);
}
}





