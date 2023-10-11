import { FC } from "react";
import { Text, View } from "react-native";
import estilos from "./estilos";
import Botao from "../Botao";

interface StatusCarrinhoProps {
  total: number;
}

const StatusCarrinho: FC<StatusCarrinhoProps> = ({ total }) => {
  return (
    <View style={estilos.conteudo}>
      <View style={estilos.total}>
        <Text style={estilos.descricao}>Total do carrinho:</Text>
        <Text style={estilos.valor}>
          {Intl.NumberFormat("pt-Br", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </Text>
      </View>
      <View style={estilos.botao}>
        <Botao valor="Concluir pedido" invertido acao={undefined} />
      </View>
    </View>
  );
};

export default StatusCarrinho;
