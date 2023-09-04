import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import farmLogo from "../../../assets/logo.png";
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
      <Texto style={estilos.nome}>Cesta de verduras</Texto>
      <View style={estilos.fazenda}>
        <Image style={estilos.imgFazenda} source={farmLogo} />
        <Texto style={estilos.nomeFazenda}>Jenny and Jack farms</Texto>
      </View>

      <Texto style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda para sua
        cozinha
      </Texto>
      <Text style={estilos.preco}>R$ 40,00</Text>
    </React.Fragment>
  );
};

export default Detalhes;
