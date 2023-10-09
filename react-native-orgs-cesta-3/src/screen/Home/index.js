import React from "react";
import { StyleSheet, View } from "react-native";
import Produtores from "./components/Produtores";
import Topo from "./components/Topo";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Inicio from "../Inicio";

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
      {/* <Produtores topo={Topo} /> */}
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={<Inicio />} />
        <Tab.Screen name="Produtores" component={<Produtores topo={Topo} />} />
      </Tab.Navigator>
    </View>
  );
};

export default HomePage;
