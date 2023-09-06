import React from "react";
import Topo from "./components/Topo";
import { StyleSheet, View } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

const HomePage = () => {
  return (
    <View style={estilos.container}>
      <Topo />
    </View>
  );
};

export default HomePage;
