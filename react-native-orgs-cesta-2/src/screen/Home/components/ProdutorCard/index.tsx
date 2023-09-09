import { Image, StyleSheet, Text, View } from "react-native";

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

const ProdutorCard = ({ nome, imagem, distancia, estrelas }) => {
  return (
    <View style={estilos.cartao}>
      <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem} />
      <View style={estilos.info}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.distancia}>{distancia}</Text>
      </View>
    </View>
  );
};

export default ProdutorCard;
