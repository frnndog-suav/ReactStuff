import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Nota } from "./src/componentes/Nota";
import NotaEditor from "./src/componentes/NotaEditor";
import { criaTabela } from "./src/servicos/notas";

export default function App() {
  const [notas, setNotas] = useState([]);

  async function mostraNotas() {
    setNotas(todasNotas);
  }

  useEffect(() => {
    criaTabela();
    mostraNotas();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} />}
        keyExtractor={(nota) => nota[0]}
      />
      <NotaEditor mostraNotas={mostraNotas} />
      <StatusBar />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
