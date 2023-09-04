import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import topoImagePath from "../../../assets/topo.png";
import Texto from "../Texto";
import cesta from '../../mocks'

const width = Dimensions.get("screen").width;

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
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
    marginTop: 50,
  },
});

const Topo = () => {
  return (
    <React.Fragment>
      <Image style={estilos.topo} source={topoImagePath} />
      <Texto style={estilos.titulo}>{cesta.topo.titulo}</Texto>
    </React.Fragment>
  );
};

export default Topo;
