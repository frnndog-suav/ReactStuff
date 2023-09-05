import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logoImage from "../../../../../assets/logo.png";

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#f6f6f6",
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  },
});

const Topo = () => {
  return (
    <View style={estilos.topo}>
      <Image style={estilos.imagem} source={logoImage} />
      <Text style={estilos.boasVindas}>Olá Pessoa</Text>
      <Text style={estilos.subtitle}>Encontre os melhores produtores</Text>
    </View>
  );
};

export default Topo;
