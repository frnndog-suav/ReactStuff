import { FC } from "react";
import { Text, TouchableOpacity } from "react-native";

import funcaoEstilosPadrao from "./estilos";

interface BotaoProps {
  valor: string;
  acao: any;
  estilos?: any;
  pequeno?: boolean;
  invertido?: boolean;
}

const Botao: FC<BotaoProps> = ({
  acao,
  valor,
  estilos,
  pequeno = false,
  invertido = false,
}) => {
  const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido);

  return (
    <TouchableOpacity style={[estilosPadrao.botao, estilos]} onPress={acao}>
      <Text style={estilosPadrao.valor}>{valor}</Text>
    </TouchableOpacity>
  );
};

export default Botao;
