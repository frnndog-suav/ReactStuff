import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import topoImagePath from "../../../assets/topo.png";
import farmLogo from "../../../assets/logo.png";
import Texto from "../../components/Texto";

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
    fontWeight: "bold",
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
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
      <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
      <View style={estilos.cesta}>
        <Texto style={estilos.nome}>Cesta de verduras</Texto>
        <View style={estilos.fazenda}>
          <Image style={estilos.imgFazenda} source={farmLogo} />
          <Texto style={estilos.nomeFazenda}>Jenny and Jack farms</Texto>
        </View>

        <Texto style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha
        </Texto>
        {/* <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
          cozinha
        </Text> */}
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </React.Fragment>
  );
};

export default Cesta;
