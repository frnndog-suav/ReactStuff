import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Produtor from "../screen/Produtor";

const Stack = createStackNavigator();

const ProdutorRotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
  );
};

export default ProdutorRotas;
