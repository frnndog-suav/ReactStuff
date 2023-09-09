import React from "react";
import { StyleSheet, View } from "react-native";
import Produtores from "./components/Produtores";
import Topo from "./components/Topo";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

const HomePage = () => {
  return (
    <View style={estilos.container}>
      <Produtores topo={Topo} />
    </View>
  );
};

export default HomePage;
