import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import useProdutores from "../../../../hooks/useProdutores";
import ProdutorCard from "../ProdutorCard";
import Topo from "../Topo";

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#464646",
  },
});

const Produtores = () => {
  const [titulo, lista] = useProdutores();

  const Header = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      keyExtractor={({ nome }) => nome}
      data={lista}
      ListHeaderComponent={Header}
      renderItem={({ item }) => <ProdutorCard {...item} />}
    />
  );
};

export default Produtores;
