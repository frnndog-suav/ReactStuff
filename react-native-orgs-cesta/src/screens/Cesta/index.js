import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Detalhes from "../../components/Detalhes";
import Item from "../../components/Item";
import Topo from "../../components/Topo";
import cesta from "../../mocks/";
import Texto from "../../components/Texto";

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});

const Cesta = () => {
  return (
    <>
      <FlatList
        data={cesta.itens.lista}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo />
              <View style={estilos.cesta}>
                <Detalhes />
                <Texto style={estilos.titulo}>{cesta.itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

export default Cesta;
