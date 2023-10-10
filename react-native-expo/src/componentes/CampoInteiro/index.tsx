import { FC } from "react";
import { TextInput } from "react-native";

import estilosPadrao from "./estilos";

interface CampoInteiroProps {
  valor: string;
  estilos: any;
  handleQuantidade: (value: string) => void;
}

const CampoInteiro: FC<CampoInteiroProps> = ({
  valor,
  estilos,
  handleQuantidade,
}) => {
  const atualiza = (novoValor: string, acao: (value: string) => void) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificaInteiro) return;

    const removeZerosAEsquerda = novoValor.replace(/^(0)(.+)/, "$2");

    acao(removeZerosAEsquerda);
  };

  return (
    <TextInput
      style={[estilosPadrao.campo, estilos]}
      keyboardType="number-pad"
      value={String(valor)}
      selectTextOnFocus
      onChangeText={(value) => atualiza(value, handleQuantidade)}
    />
  );
};

export default CampoInteiro;
