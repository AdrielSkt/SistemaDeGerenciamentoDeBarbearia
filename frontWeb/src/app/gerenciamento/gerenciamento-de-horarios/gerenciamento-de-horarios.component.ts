import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import {default as _rollupMoment} from 'moment';
import { FormularioMarcacao } from 'src/app/models/formulario-marcacao-model';
import { Servico } from 'src/app/models/servicos-model';
import { GerenciamentoHorariosService } from 'src/app/services/gerenciamento-horarios.service';
import { ServicosService } from 'src/app/services/servicos.service';


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


  public servicos: Servico[] = [];
  public servico: Servico = {id: '', nome: '', imagem: '', valor: 0}
  public marcacoes: FormularioMarcacao[] = [];
  public userId: string;
  
  displayedColumns: string[] = [ 'nome','horario','servicos','valor','ações'];
  dataSource: FormularioMarcacao[];

  constructor(
    private gerenciamentoHorariosService: GerenciamentoHorariosService, 
    private servicosService: ServicosService,
    private rotaDeParametro: ActivatedRoute){}


  ngOnInit(): void {
    this.rotaDeParametro.params.subscribe((obj: any) => this.userId = obj.id);
    this.filtraListaPorData();
    this.filtraListaPorData();
  }

  filtraListaPorData(): void{
    let dataFormatada = new Date(this.startDate);
    this.diaAtual = this.diasSemana[dataFormatada.getDay()];
    this.marcacoes = [];
    this.buscarHorariosMarcados(dataFormatada.toLocaleDateString("pt-BR").replace(/\//g, '-'));

  }

 async buscarHorariosMarcados(data: string){
    this.gerenciamentoHorariosService.getAll().then( async result => {
      for (const item of result) {
        const formulario: FormularioMarcacao = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        formulario.servicos = await Promise.all(formulario.servicos.map(async servico =>{ // <-- adicionar async aqui e usar Promise.all para aguardar todas as chamadas de função
          await this.buscarServico(servico);
          return this.servico.nome;
        }));
        if(formulario.idBarbeiro == this.userId){
          if(formulario.data == data){
            console.log(formulario.data);
            this.marcacoes.push(formulario);
          }else if(data == ''){
            this.marcacoes.push(formulario);
          }
        }

      }
      this.dataSource = this.marcacoes;
    });
  }

  async buscarServico(id: string){
     const result = await this.servicosService.getOne(id.trim()).then(result => {
      const data = result.payload.data() as Servico;
      if (data) {
        this.servico.id = result.payload.id;
        this.servico.nome = data.nome;
        this.servico.imagem = data.imagem;
        this.servico.valor = data.valor;
      }
    })
  }

}



