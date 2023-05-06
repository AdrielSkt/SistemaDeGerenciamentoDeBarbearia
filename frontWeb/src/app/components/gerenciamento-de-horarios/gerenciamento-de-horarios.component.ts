import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {default as _rollupMoment} from 'moment';
import { FormularioMarcacao } from 'src/app/models/formulario-marcacao-model';
import { Servico } from 'src/app/models/servicos-model';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-gerenciamento-de-horarios',
  templateUrl: './gerenciamento-de-horarios.component.html',
  styleUrls: ['./gerenciamento-de-horarios.component.scss'],
  providers: [

    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class GerenciamentoDeHorariosComponent implements OnInit{
  startDate = new Date();
  diasSemana: String[] = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
  diaAtual?: String;


  public servicos: Servico[] = [
    { id: "1", nome: "Corte de Cabelo", valor: 30 },
    { id: "2", nome: "Corte de Barba", valor: 30 },
    { id: "3", nome: "Sombrancelha", valor: 10 },
    { id: "4", nome: "Progressiva", valor: 60 },
  ]
  public marcacoes: FormularioMarcacao[] = [
    {id: 1, idBarbeiro: 2, nomeCliente: 'Adriel',data: Date.now(),hora: "11",servicos: [this.servicos[2], this.servicos[3]], situacao: "Aprovado"},
    {id: 1, idBarbeiro: 2, nomeCliente: 'Adriel',data: Date.now(),hora: "11",servicos: [this.servicos[2], this.servicos[3]], situacao: "Aprovado"},
    {id: 1, idBarbeiro: 2, nomeCliente: 'Adriel',data: Date.now(),hora: "11",servicos: [this.servicos[2], this.servicos[3]], situacao: "Pendente"},
    {id: 1, idBarbeiro: 2, nomeCliente: 'Adriel',data: Date.now(),hora: "11",servicos: [this.servicos[2], this.servicos[3]], situacao: "Aprovado"},
    {id: 1, idBarbeiro: 2, nomeCliente: 'Adriel',data: Date.now(),hora: "11",servicos: [this.servicos[2], this.servicos[3]], situacao: "Pendente"},
    {id: 1, idBarbeiro: 2, nomeCliente: 'Adriel',data: Date.now(),hora: "11",servicos: [this.servicos[2], this.servicos[3]], situacao: "Aprovado"},
    {id: 1, idBarbeiro: 2, nomeCliente: 'Adriel',data: Date.now(),hora: "11",servicos: [this.servicos[2], this.servicos[3]], situacao: "Pendente"},
    {id: 1, idBarbeiro: 2, nomeCliente: 'Ma',data: Date.now(),hora: "11",servicos: [this.servicos[1], this.servicos[0]], situacao: "Aprovado"}
  ]
  
  
  displayedColumns: string[] = [ 'nome','horario','servicos','ações'];
  dataSource = this.marcacoes;
  ngOnInit(): void {
    console.log(this.marcacoes);
  this.filtraListaPorData();
  }

  public filtraListaPorData(): void{
    let dataFormatada = new Date(this.startDate);
    this.diaAtual = this.diasSemana[dataFormatada.getDay()];
    console.log(this.diaAtual)
      console.log(dataFormatada.toLocaleDateString("pt-BR"))
  }

}
