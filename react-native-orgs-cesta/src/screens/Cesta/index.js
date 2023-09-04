import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Detalhes from "../../components/Detalhes";
import Topo from "../../components/Topo";
import Itens from "../../components/Itens";

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

const Cesta = () => {
  return (
    <ScrollView>
      <Topo />
      <View style={estilos.cesta}>
        <Detalhes />
        <Itens />
      </View>
    </ScrollView>
  );
};

export default Cesta;
