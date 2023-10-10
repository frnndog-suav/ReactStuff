import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import Inicio from "../Inicio";
import Produtores from "./components/Produtores";

const Tab = createMaterialBottomTabNavigator();

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});

const HomePage = () => {
  return (
    <View style={estilos.container}>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Produtores" component={Produtores} />
      </Tab.Navigator>
    </View>
  );
};

export default HomePage;
