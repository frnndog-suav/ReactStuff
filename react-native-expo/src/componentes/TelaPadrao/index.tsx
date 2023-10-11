import { FC } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import estilos from "../../estilos";

interface TelaPadraoProps {
  children: React.ReactNode;
}

const TelaPadrao: FC<TelaPadraoProps> = ({ children }) => {
  return (
    <SafeAreaView style={estilos.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        style={estilos.preencher}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TelaPadrao;
