import { Servico } from "./servicos-model";

export interface Usuario {
    id: String,
    nome: string,
    email: string,
    senha: string,
    sobre: string,
    imagem?: Blob,
    servicos: string[],
    admin: boolean,




}