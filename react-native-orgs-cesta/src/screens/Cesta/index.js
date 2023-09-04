import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topoImagePath from "../../../assets/topo.png";
import farmLogo from "../../../assets/logo.png";

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
    marginTop: 50,
  },
  nome: {
    color: "#464646",
    fontSize: 26,
    fontFamily: "MontserratBold",
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nomeFazenda: {
    fontSize: 16,
    marginLeft: 12,
    fontFamily: "MontserratRegular",
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
  imgFazenda: {
    width: 32,
    height: 32,
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
  },
});

const Cesta = () => {
  return (
    <React.Fragment>
      <Image style={estilos.topo} source={topoImagePath} />
      <Text style={estilos.titulo}>Detalhe da cesta</Text>
      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <View style={estilos.fazenda}>
          <Image style={estilos.imgFazenda} source={farmLogo} />
          <Text style={estilos.nomeFazenda}>Jenny and Jack farms</Text>
        </View>

        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </React.Fragment>
  );
};

export default Cesta;
