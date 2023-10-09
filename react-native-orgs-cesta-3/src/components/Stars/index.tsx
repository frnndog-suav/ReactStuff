import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Estrela from "../Estrela";

const estilos = StyleSheet.create({
  estrelas: {
    flexDirection: "row",
  },
});

const Stars = ({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) => {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => setQuantidade(i + 1)}
          disabled={!editavel}
          isFilled={i < quantidade}
          grande={grande}
        />
      );
    }
    return listaEstrelas;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
};

export default Stars;
