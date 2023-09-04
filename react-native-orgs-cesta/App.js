import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import Cesta from "./src/screens/Cesta/index";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import Texto from "./src/components/Texto";

export default function App() {
  const [loadedFont] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!loadedFont) {
    return <View>Carregando</View>;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
