import React from "react";
import { Image, StyleSheet, View } from "react-native";
import cesta from "../../mocks/index";
import Texto from "../Texto";

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646'
  },
});

const Itens = () => {
  return (
    <React.Fragment>
      <Texto style={estilos.titulo}>{cesta.itens.titulo}</Texto>
      {cesta.itens.lista.map((item, index) => (
        <View key={index} style={estilos.item}>
          <Image source={item.imagem} style={estilos.imagem} />
          <Texto style={estilos.nome}>{item.nome}</Texto>
        </View>
      ))}
    </React.Fragment>
  );
};

export default Itens;
