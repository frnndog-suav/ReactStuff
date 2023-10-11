import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Item from "./Item";

import estilos from "../../estilos";

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
    <SafeAreaView style={estilos.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        style={estilos.preencher}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <FlatList
          data={servicos}
          keyExtractor={(servico) => String(servico.id)}
          renderItem={({ item }) => <Item {...item} />}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Servicos;
