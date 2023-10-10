import React, { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ServicoType } from "../../../../App";
import Botao from "../../../componentes/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro";
import estilos from "./estilos";

const Item: FC<ServicoType> = ({ descricao, nome, preco }) => {
  const [quantidade, setQuantidade] = useState("0");
  const [total, setTotal] = useState(0);
  const [expandir, setExpandir] = useState(false);

  const atualizaQuantidadeETotal = (novaQuantidade: string) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (novaQuantidade: string) => {
    setTotal(Number(novaQuantidade) * preco);
  };

  const inverterExpandir = () => {
    setExpandir((previousValue) => !previousValue);
    atualizaQuantidadeETotal("1");
  };

  return (
    <>
      <TouchableOpacity onPress={inverterExpandir} style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </TouchableOpacity>
      {expandir && (
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
          <Botao acao={() => {}} valor={"Adicionar"} />
        </View>
      )}
      <View style={estilos.divisor} />
    </>
  );
};

export default Item;
