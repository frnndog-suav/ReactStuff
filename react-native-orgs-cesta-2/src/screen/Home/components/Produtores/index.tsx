import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { carregaProdutores } from "../../../../services/loadData";
import ProdutorCard from "../ProdutorCard";

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

const Produtores = ({ topo: Topo }) => {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const response = carregaProdutores();
    setTitulo(response.titulo);
    setLista(response.lista);
  }, []);

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
