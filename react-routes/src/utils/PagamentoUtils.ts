import { TiposDePagamento } from "../types/PagamentoTypes";

export const tiposPagamento: TiposDePagamento[] = [
  {
    nome: "Boleto",
    juros: 1,
    id: 1,
  },
  {
    nome: "Cartão de crédito",
    juros: 1.3,
    id: 2,
  },
  {
    nome: "PIX",
    juros: 1,
    id: 3,
  },
  {
    nome: "Crediário",
    juros: 1.5,
    id: 4,
  },
];
