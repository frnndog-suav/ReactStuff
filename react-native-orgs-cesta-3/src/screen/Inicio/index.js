import React from "react";
import { StyleSheet, Text, View } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

const Inicio = () => {
  return (
    <View style={estilos.container}>
      <Text>{"Pagina inicio"}</Text>
    </View>
  );
};

export default Inicio;
