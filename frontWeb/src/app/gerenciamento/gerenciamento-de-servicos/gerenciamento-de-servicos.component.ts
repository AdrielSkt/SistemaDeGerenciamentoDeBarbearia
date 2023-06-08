import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from 'src/app/models/servicos-model';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-gerenciamento-de-servicos',
  templateUrl: './gerenciamento-de-servicos.component.html',
  styleUrls: ['./gerenciamento-de-servicos.component.scss']
})
export class GerenciamentoDeServicosComponent implements OnInit {

  servicos: Servico[] = [];
  displayedColumns: string[] = [ 'nome','valor', 'ações'];
  dataSource: Servico[];



constructor(private router: Router, private servicosService: ServicosService,){}

  ngOnInit(): void {
    this.listarServicos();
  }

  listarServicos(){
    this.servicosService.getAll().then(result => {
      result.forEach((item: any) => {
        const servico: Servico = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.servicos.push(servico)
      });
      this.dataSource = this.servicos;
    });
  }

  public adicionarServico(){
    this.router.navigate(['servicos/adicionar'])
  }

  public editarServico(id: string){
    this.router.navigate(['servicos/edit', id])
  }

  public excluirServico(id: string){
    this.servicosService.delete(id);
    this.servicos = [];
    this.listarServicos();
  
  } 

}
