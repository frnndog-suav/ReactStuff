import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import cesta from "../../mocks";
import Texto from "../Texto";

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
  },
  imgFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3a3a3",
    fontSize: 16,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
  },
});

const Detalhes = () => {
  return (
    <React.Fragment>
      <Texto style={estilos.nome}>{cesta.detalhes.nome}</Texto>
      <View style={estilos.fazenda}>
        <Image style={estilos.imgFazenda} source={cesta.detalhes.logoFazenda} />
        <Texto style={estilos.nomeFazenda}>
          {cesta.detalhes.nomeDaFazenda}
        </Texto>
      </View>

      <Texto style={estilos.descricao}>{cesta.detalhes.descricao}</Texto>
      <Text style={estilos.preco}>{cesta.detalhes.preco}</Text>
    </React.Fragment>
  );
};

export default Detalhes;
