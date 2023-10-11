import { FlatList } from "react-native";
import Item from "./Item";

import TelaPadrao from "../../componentes/TelaPadrao";

export type ServicoType = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
};

const servicos: ServicoType[] = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "Banhe o gato",
  },
  {
    id: 2,
    nome: "Vacina",
    preco: 89.9,
    descricao: "+10 de vida máx.",
  },
  {
    id: 3,
    nome: "Tosa",
    preco: 59.9,
    descricao: "Corte o pelo",
  },
];

const Servicos = () => {
  return (
    <>
      <FlatList
        data={servicos}
        keyExtractor={(servico) => String(servico.id)}
        renderItem={({ item }) => <Item {...item} />}
      />
    </>
  );
};

export default Servicos;
