import { Servico } from "./servicos-model";

export interface FormularioMarcacao {
  //id: string;
  nomeCliente: string;
  idCliente: string;
  idBarbeiro: string;
  data: string;
  hora: string;
  servicos: string[];
  valor: number;
}