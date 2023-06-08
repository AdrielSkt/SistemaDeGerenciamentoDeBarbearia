

export interface Barbeiro {
    id: string,
    nome: string,
    email: string,
    senha: string,
    sobre: string,
    imagem?: Blob,
    servicos: string[],
    admin: boolean,
}