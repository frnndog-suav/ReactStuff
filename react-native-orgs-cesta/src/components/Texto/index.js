import React from "react";
import { Text, StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});

const Texto = ({ children, style }) => {
  let estilo = estilos.texto;

  if (style?.fontWeight === "bold") {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[estilo, style]}>{children}</Text>;
};

export default Texto;
