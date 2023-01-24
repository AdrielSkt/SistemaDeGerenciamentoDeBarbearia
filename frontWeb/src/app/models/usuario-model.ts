import { Servico } from "./servicos-model";

export interface Usuario {
    id: Number,
    nome: String,
    email: String,
    senha: String,
    sobre: String,
    imagem?: Blob,
    servicos: Number[],




}