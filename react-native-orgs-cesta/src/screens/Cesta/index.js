import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";
import topoImagePath from "../../../assets/topo.png";

const width = Dimensions.get("screen").width;

const estilos = StyleSheet.create({
  topo: {
    width: "100wv",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    padding: 16,
    marginTop: 50
  },
});

const Cesta = () => {
  return (
    <React.Fragment>
      <Image style={estilos.topo} source={topoImagePath} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>
    </React.Fragment>
  );
};

export default Cesta;
