import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Carrinho from "./screens/Carrinho";
import Servicos from "./screens/Servicos";

const Tab = createBottomTabNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Serviços" component={Servicos} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;
