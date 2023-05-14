import { Servico } from "./servicos-model";

export interface Usuario {
    id: String,
    nome: String,
    email: String,
    senha: String,
    sobre: String,
    imagem?: Blob,
    servicos: string[],
    admin: boolean,




}