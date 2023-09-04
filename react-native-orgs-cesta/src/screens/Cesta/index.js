import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhes from "../../components/Detalhes";
import Topo from "../../components/Topo";

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

const Cesta = () => {
  return (
    <React.Fragment>
      <Topo />
      <View style={estilos.cesta}>
        <Detalhes />
      </View>
    </React.Fragment>
  );
};

export default Cesta;
