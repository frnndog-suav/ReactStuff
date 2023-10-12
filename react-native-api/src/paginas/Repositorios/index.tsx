import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import estilos from "./estilos";

interface RepositoriosProps {
  route: any;
  navigation: any;
}

export default function Repositorios({ route, navigation }: RepositoriosProps) {
  const [repo, setRepo] = useState([]);

  return (
    <View style={estilos.container}>
      <Text style={estilos.repositoriosTexto}>
        {repo.length} repositórios criados
      </Text>
      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate("CriarRepositorio")}>
        <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
      </TouchableOpacity>
    </View>
  );
}
