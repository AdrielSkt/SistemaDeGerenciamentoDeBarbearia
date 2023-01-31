import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})

export class LoginComponent implements OnInit {
  public formularioLogin!: FormGroup;
  
  constructor( private formBuilder: FormBuilder) {

  }

  
  ngOnInit(): void {
    this.criaFormulario();

  }
  public hide = true;




criaFormulario(): void {
  this.formularioLogin = this.formBuilder.group({
    email: [''],
    senha: [''],

  });
}
}





