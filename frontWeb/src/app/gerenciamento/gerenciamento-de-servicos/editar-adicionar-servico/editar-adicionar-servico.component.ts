import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/models/servicos-model';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-editar-adicionar-servico',
  templateUrl: './editar-adicionar-servico.component.html',
  styleUrls: ['./editar-adicionar-servico.component.scss']
})
export class EditarAdicionarServicoComponent implements OnInit {
  public idDeEdicao!: string;
  public servicoEdit: Servico = {id: '', nome: '', valor: 0, imagem: ''};
  public formulario!: FormGroup;
  public hide = true;
  public titulo: string = 'NOVO SERVIÇO'


  constructor(
    private rotaDeParametro: ActivatedRoute,
    private formBuilder: FormBuilder, 
    private servicosService: ServicosService,
    private router: Router){}
  ngOnInit(): void {
    this.rotaDeParametro.params.subscribe((obj: any) => this.idDeEdicao = obj.id);
    this.criaFormulario();
  }


  criaFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      valor: [],
      imagem: [''],


    });
    if (this.idDeEdicao != undefined) {
      this.titulo = 'EDITAR SERVIÇO'
      this.buscaServico();

      
    }
  }

  buscaServico(): void {
    this.servicosService.getOne(this.idDeEdicao).then(result => {
      const data = result.payload.data() as Servico;
      if (data) {
        this.servicoEdit.id = result.payload.id;
        this.servicoEdit.nome = data.nome;
        this.servicoEdit.valor = data.valor;
        this.servicoEdit.imagem =data.imagem;

        this.preecheFormulario();

      }
    });
}

preecheFormulario(): void {
  this.formulario.get('nome')!.setValue(this.servicoEdit.nome);
  this.formulario.get('valor')!.setValue(this.servicoEdit.valor);
  this.formulario.get('imagem')!.setValue(this.servicoEdit.imagem);


}

async salvar(): Promise<void> { 
  let obj = this.formulario.getRawValue();
  this.servicosService.create(obj);
  this.voltar();
  
}

async atualizar(): Promise<void> { 
  let obj = this.formulario.getRawValue();
  this.servicosService.update(this.idDeEdicao, obj);
  this.voltar();
  
}


voltar(){
  this.router.navigateByUrl('servicos');
}

}
