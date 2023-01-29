import { Servico } from "./servicos-model";

export interface FormularioMarcacao {
  id: Number;
  idBarbeiro: Number;
  nomeCliente: String;
  data: Number;
  hora: String;
  servicos: Servico[];
  // Pendente: Aprovado
  situacao: String;
}