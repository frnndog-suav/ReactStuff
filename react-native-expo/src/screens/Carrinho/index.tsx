import React from "react";
import { FlatList } from "react-native";
import StatusCarrinho from "../../componentes/StatusCarrinho";
import TelaPadrao from "../../componentes/TelaPadrao";
import Item from "./Item";

export type ServicoCarrinhoType = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  quantidade: number;
};

const servicos: ServicoCarrinhoType[] = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Banhe o gato",
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Vacina",
    preco: 89.9,
    descricao: "+10 de vida máx.",
    quantidade: 1,
  },
  {
    id: 3,
    nome: "Tosa",
    preco: 59.9,
    descricao: "Corte o pelo",
    quantidade: 1,
  },
];

const Carrinho = () => {
  const total = servicos.reduce(
    (previousValue, current) => previousValue + current.preco,
    0
  );

  return (
    <TelaPadrao>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        keyExtractor={(servico) => String(servico.id)}
        renderItem={({ item }) => <Item {...item} />}
      />
    </TelaPadrao>
  );
};

export default Carrinho;
