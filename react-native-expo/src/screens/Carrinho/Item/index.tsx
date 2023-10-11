import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import { ServicoCarrinhoType } from "..";
import Botao from "../../../componentes/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro";
import estilos from "./estilos";

const Item: FC<ServicoCarrinhoType> = ({
  descricao,
  nome,
  preco,
  quantidade: quantidadeInicial,
}) => {
  const [quantidade, setQuantidade] = useState(String(quantidadeInicial));
  const [total, setTotal] = useState(preco * quantidadeInicial);

  const atualizaQuantidadeETotal = (novaQuantidade: string) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade: string) => {
    setTotal(Number(novaQuantidade) * preco);
  };

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro
              estilos={estilos.quantidade}
              valor={quantidade}
              handleQuantidade={atualizaQuantidadeETotal}
            />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Total:</Text>
            <Text style={estilos.preco}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </View>
        </View>
        <Botao acao={() => {}} valor={"Remover do carrinho"} />
      </View>
      <View style={estilos.divisor} />
    </>
  );
};

export default Item;
