import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '../../../models/servicos-model';
import { Usuario } from '../../../models/usuario-model';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioEditComponent implements OnInit {
  public idDeEdicao!: number;
  public hide = true;
  public isChecked: boolean = false;
  public formulario!: FormGroup;
  public usuarioEdit!: Usuario;
  public servicosUsuario: Number[] = [];


  public servicos: Servico[] = [
    { id: 1, nome: "Corte de Cabelo", valor: 30 },
    { id: 2, nome: "Corte de Barba", valor: 30 },
    { id: 3, nome: "Sombrancelha", valor: 10 },
    { id: 4, nome: "Progressiva", valor: 60 },
  ]
  public usuarios: Usuario[] = [
    { id: 1, nome: 'Adriel', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda', servicos: [1, 2], sobre: 'menoooooooo' },
    { id: 2, nome: 'Caio', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda', servicos: [3, 4], sobre: 'menoooooooo' },
    { id: 3, nome: 'Igor', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda', servicos: [4], sobre: 'menoooooooo' }
  ]

  constructor(private rotaDeParametro: ActivatedRoute, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.rotaDeParametro.params.subscribe((obj: any) => this.idDeEdicao = obj.id);
    console.log(this.idDeEdicao);
    this.criaFormulario();



  }





  buscaUsuario(): void {
    this.usuarios.forEach(usuario => {
      if (usuario.id == this.idDeEdicao) {
        this.usuarioEdit = usuario;
      }
    });
  }

  criaFormulario(): void {
    this.formulario = this.formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      imagem: [''],
      senha: [''],
      servicos: [''],
      sobre: ['']
    });
    if (this.idDeEdicao != undefined) {
      this.buscaUsuario();
      this.preecheFormulario();
    }
  }



  preecheFormulario(): void {
    this.formulario.get('id')!.setValue(this.usuarioEdit.id);
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



  validaToggleUsuarioEdit(id: Number): boolean {
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
    console.log(JSON.stringify(obj));
}

}


