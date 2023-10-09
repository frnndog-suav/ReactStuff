import { SafeAreaView, StyleSheet } from "react-native";
import HomePage from "./src/screen/Home";

const estilos = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaView style={estilos.screen}>
      <HomePage />
    </SafeAreaView>
  );
}
