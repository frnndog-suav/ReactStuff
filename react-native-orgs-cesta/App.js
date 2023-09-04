import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import Cesta from "./src/screens/Cesta/index";

export default function App() {
  const [loadedFont] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!loadedFont) {
    return (
      <View>
        <Text>{'Carregando...'}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
