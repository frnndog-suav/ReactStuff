import { FC } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import estiloGlobal, { cores } from "../../estilos";
import estilos from "./estilos";

interface TelaPadraoProps {
  children: React.ReactNode;
}

const TelaPadrao: FC<TelaPadraoProps> = ({ children }) => {
  return (
    <>
      <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar backgroundColor={cores.roxo} />
        <KeyboardAvoidingView
          style={estiloGlobal.preencher}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
      <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  );
};

export default TelaPadrao;
