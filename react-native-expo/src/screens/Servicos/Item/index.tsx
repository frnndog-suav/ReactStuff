import React, { FC, useState } from "react";
import { Text, View } from "react-native";
import { ServicoType } from "../../../../App";
import Botao from "../../../componentes/Botao";
import CampoInteiro from "../../../componentes/CampoInteiro";
import estilos from "./estilos";

const Item: FC<ServicoType> = ({ descricao, nome, preco }) => {
  const [quantidade, setQuantidade] = useState("1");

  const handleQuantidade = (value: string) => setQuantidade(value);

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade:</Text>
            <CampoInteiro
              estilos={estilos.quantidade}
              valor={quantidade}
              handleQuantidade={handleQuantidade}
            />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Preço:</Text>
            <Text style={estilos.preco}>0</Text>
          </View>
        </View>
        <Botao acao={() => {}} valor={"Adicionar"} />
      </View>
      <View style={estilos.divisor} />
    </>
  );
};

export default Item;
