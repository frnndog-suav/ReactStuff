import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { cores } from "./estilos";
import Carrinho from "./screens/Carrinho";
import Servicos from "./screens/Servicos";

const Tab = createBottomTabNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: cores.roxo,
          tabBarInactiveTintColor: cores.claro,
          tabBarActiveBackgroundColor: cores.roxo,
          tabBarInactiveBackgroundColor: cores.laranja,
          tabBarHideOnKeyboard: true,
          tabBarIconStyle: {
            display: "none",
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            width: "100%",
            flex: 1,
            fontWeight: "bold",
            fontSize: 16,
            lineHeight: 21,
            paddingTop: 21,
            marginTop: 10,
            backgroundColor: cores.laranja,
          },
        })}>
        <Tab.Screen name="Serviços" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;
