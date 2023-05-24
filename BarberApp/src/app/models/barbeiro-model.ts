

export interface Barbeiro {
    id: String,
    nome: string,
    email: string,
    senha: string,
    sobre: string,
    imagem?: Blob,
    servicos: string[],
    admin: boolean,
}