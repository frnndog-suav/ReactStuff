import { IOpcaoCompra } from "./IOpcaoCompra";

export interface ILivro {
  id: number;
  categoria: number;
  titulo: string;
  slug: string;
  descricao: string;
  isbn: string;
  numeroPaginas: string;
  publicacao: string;
  imagemCapa: string;
  autor: number;
  opcoesCompra: IOpcaoCompra[];
  sobre: string;
}
