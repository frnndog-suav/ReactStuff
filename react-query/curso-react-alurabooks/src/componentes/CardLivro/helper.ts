import { ILivro } from './../../interfaces/ILivro';

export const obterValorMinimo = (livro: ILivro) => {
    return Math.min(...livro.opcoesCompra.map(op => op.preco))
}