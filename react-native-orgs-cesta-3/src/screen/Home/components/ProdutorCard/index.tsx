import { useMemo, useReducer } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stars from "../../../../components/Stars";

const estilos = StyleSheet.create({
  cartao: {
    backgroundColor: "#f6f6f6",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: "row",

    //android
    elevation: 4,

    //ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold",
  },
  distancia: {
    fontSize: 14,
    lineHeight: 19,
    marginRight: 8,
  },
});

const distanciaEmMetros = (distancia) => {
  return `${distancia}m`;
};

const ProdutorCard = ({ nome, imagem, distancia, estrelas }) => {
  const [selecionado, inverterSelecionado] = useReducer(
    (selecionado) => !selecionado,
    false
  );

  const distanciaTexto = useMemo(
    () => distanciaEmMetros(distancia),
    [distancia]
  );

  return (
    <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
      <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
      <View style={estilos.info}>
        <View>
          <Text style={estilos.nome}>{nome}</Text>
          <Stars
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={estilos.distancia}>{distanciaTexto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProdutorCard;
