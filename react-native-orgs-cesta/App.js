import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Cesta from "./src/screens/Cesta/index";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
