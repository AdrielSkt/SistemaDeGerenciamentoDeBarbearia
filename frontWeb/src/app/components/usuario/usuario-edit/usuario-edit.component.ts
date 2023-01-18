import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servico } from '../usuario-model/servicos-model';
import { Usuario } from '../usuario-model/usuario-model';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsuarioEditComponent {
  idDeEdicao!: number;
  hide = true;
  isChecked: boolean = true;
  public servicos: Servico[] = [
    {id: 1, nome: "Corte de Cabelo", valor: 30},
    {id: 1, nome: "Corte de Barba", valor: 30},
    {id: 1, nome: "Sombrancelha", valor: 10},
  ]

  constructor(private rotaDeParametro: ActivatedRoute){

  }

  ngOnInit(){
    this.rotaDeParametro.params.subscribe((obj: any) => this.idDeEdicao = obj.id);
    console.log(this.idDeEdicao);

  }
  
}


  // public usuarios: Usuario[] = [
  //   {id: 1, nome: 'Adriel', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda',servicos: [{id: 1,nome: 'asd', valor: 2311, imagem: undefined }],sobre: 'menoooooooo'},
  //   {id: 2, nome: 'Caio', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda',servicos: [{id: 1,nome: 'asd', valor: 2311, imagem: undefined }],sobre: 'menoooooooo'},
  //   {id: 3, nome: 'Igor', email: 'adr@mail.com', imagem: undefined, senha: 'dasdasda',servicos: [{id: 1,nome: 'asd', valor: 2311, imagem: undefined }],sobre: 'menoooooooo'}
  // ]