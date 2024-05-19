export interface Produto {
    id: Number;
    name: String;
    descricao: String;
}

export interface ProdutoResponse {
    data: Produto[]
}