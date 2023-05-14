import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../../models/servicos-model';
import { Usuario } from '../../models/usuario-model';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  public hide = true;
  public isChecked: boolean = false;
  public formulario!: FormGroup;
  public servicosUsuario: string[] = [];

  public servicos: Servico[] = [];

  constructor(
     private formBuilder: FormBuilder, 
     private usuarioService: UsuarioService, 
     private servicosService: ServicosService,
     private authService: AuthService,
     private route: Router) {

  }

  ngOnInit() {
    this.buscaServicos();
    this.criaFormulario();
  } 



  buscaServicos(): void{
    this.servicosService.getAll().then(result => {
      result.forEach((item: any) => {
        const servico: Servico = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.servicos.push(servico)
      })
    });
  }

  criaFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      email: [''],
      imagem: [''],
      senha: [''],
      servicos: [''],
      sobre: [''],
      admin: [false],
    });
  }

  atualizaListaServicos(servico: Servico, event: MatSlideToggleChange): void {
    this.isChecked = event.checked;
    if (this.isChecked == true) {
      this.servicosUsuario.push(servico.id);
    }
    if (this.isChecked == false) {
      this.servicosUsuario = this.servicosUsuario.filter(e => e != servico.id);
    }
    console.log(this.servicosUsuario);
  }


   async salvar(): Promise<void> { 
    this.formulario.get('servicos')!.setValue(this.servicosUsuario)
    let obj = this.formulario.getRawValue();
    
    let user = await this.authService.registrar(this.formulario.get('email')?.value,this.formulario.get('senha')?.value);
    if(user){
    this.usuarioService.createById(user?.uid,obj);
    }
}

navegarPara(){
  this.route.navigateByUrl('login');
}

}
