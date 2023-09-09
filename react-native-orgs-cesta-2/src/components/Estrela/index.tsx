import { TouchableOpacity, Image, StyleSheet } from "react-native";
import estrelaLogo from "../../../assets/estrela.png";
import estrelaCinzaLogo from "../../../assets/estrelaCinza.png";

const estilos = (grande) =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

const Estrela = ({ onPress, disabled = true, isFilled, grande = false }) => {
  const getImage = () => {
    if (isFilled) {
      return estrelaLogo;
    }

    return estrelaCinzaLogo;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image style={estilos(grande).estrela} source={getImage()} />
    </TouchableOpacity>
  );
};

export default Estrela;
