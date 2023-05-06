import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '../../../models/servicos-model';
import { Usuario } from '../../../models/usuario-model';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioEditComponent implements OnInit {
  public idDeEdicao!: string;
  public hide = true;
  public isChecked: boolean = false;
  public formulario!: FormGroup;
  public usuarioEdit: Usuario = {id: '', nome: '', email: '', senha: '', sobre: '', servicos: []};
  public servicosUsuario: string[] = [];


  public servicos: Servico[] = [];

  constructor(
     private rotaDeParametro: ActivatedRoute,
     private formBuilder: FormBuilder, 
     private usuarioService: UsuarioService, 
     private servicosService: ServicosService) {

  }

  ngOnInit() {
    this.rotaDeParametro.params.subscribe((obj: any) => this.idDeEdicao = obj.id);
    this.buscaServicos();

    
    this.criaFormulario();
  } 

  buscaUsuario(): void {
        this.usuarioService.getOne(this.idDeEdicao).subscribe(result => {
          const data = result.payload.data() as Usuario;
          if (data) {
            this.usuarioEdit.id = result.payload.id;
            this.usuarioEdit.nome = data.nome;
            this.usuarioEdit.email = data.email;
            this.usuarioEdit.senha = data.senha;
            this.usuarioEdit.sobre = data.sobre;
            this.usuarioEdit.servicos = data.servicos;
            this.preecheFormulario();

          }
        });
  }


  buscaServicos(): void{
    this.servicosService.getAll().then(result => {
      result.map((item: any) => {
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
      sobre: ['']
    });
    if (this.idDeEdicao != undefined) {
      this.buscaUsuario();

      
    }
  }

  preecheFormulario(): void {
    this.formulario.get('nome')!.setValue(this.usuarioEdit.nome);
    this.formulario.get('email')!.setValue(this.usuarioEdit.email);
    this.formulario.get('imagem')!.setValue(this.usuarioEdit.imagem);
    this.formulario.get('senha')!.setValue(this.usuarioEdit.senha);
    this.formulario.get('sobre')!.setValue(this.usuarioEdit.sobre);


    this.servicos.forEach(e => {
      this.usuarioEdit.servicos.forEach(id => {
        if (e.id == id) {
          this.servicosUsuario.push(e.id);
        }
      }
      )
    });

  }



  validaToggleUsuarioEdit(id: string): boolean {
    let validacao: boolean = false;
    if (this.idDeEdicao != undefined) {
      for (const key in this.usuarioEdit.servicos) {
        if (this.usuarioEdit.servicos[key] == id) {
          validacao = true;
        }
      }
    }
    return validacao;
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


  public salvar(): void { 
    this.formulario.get('servicos')!.setValue(this.servicosUsuario)
    let obj = this.formulario.getRawValue()
    this.usuarioService.create(obj);
}

public atualizar(): void { 
  this.formulario.get('servicos')!.setValue(this.servicosUsuario);
  if(this.formulario.get('imagem')?.value! == undefined){  
    this.formulario.get('imagem')!.setValue('');
  }

  let obj = this.formulario.getRawValue()
  this.usuarioService.update(this.idDeEdicao, obj)
}

}


