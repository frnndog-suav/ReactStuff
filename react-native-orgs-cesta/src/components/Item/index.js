import React from "react";
import { Image, StyleSheet, View } from "react-native";
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
    marginHorizontal: 16,
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
    color: "#464646",
  },
});

const Item = ({ item: { nome, imagem } }) => {  
  return (
    <View style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  );
};

export default Item;
