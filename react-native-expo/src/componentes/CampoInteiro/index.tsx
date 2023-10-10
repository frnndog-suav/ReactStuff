import { FC } from "react";
import { TextInput } from "react-native";

interface CampoInteiroProps {
  valor: string;
  handleQuantidade: (value: string) => void;
}

const CampoInteiro: FC<CampoInteiroProps> = ({ valor, handleQuantidade }) => {
  return (
    <TextInput
      keyboardType="number-pad"
      value={String(valor)}
      selectTextOnFocus
      onChangeText={(value) => handleQuantidade(value)}
    />
  );
};

export default CampoInteiro;
