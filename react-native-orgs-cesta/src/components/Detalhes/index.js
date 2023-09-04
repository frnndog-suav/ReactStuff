import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
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
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
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
      <Texto style={estilos.preco}>{cesta.detalhes.preco}</Texto>
      {/* <Button title="Comprar" /> */}
      <TouchableOpacity style={estilos.botao}>
        <Texto style={estilos.textoBotao}>{"Comprar"}</Texto>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default Detalhes;
