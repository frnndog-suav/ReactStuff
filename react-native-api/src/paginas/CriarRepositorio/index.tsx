import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { criarRepositoriosDoUsuario } from "../../servicos/requisicoes/repositorios";
import estilos from "./estilos";

interface CriarRepositorioProps {
  route: any;
  navigation: any;
}

export default function CriarRepositorio({
  route,
  navigation,
}: CriarRepositorioProps) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");

  async function criar() {
    const resultado = await criarRepositoriosDoUsuario(
      data,
      nome,
      route.params.id
    );

    if (resultado === "Sucesso") {
      Alert.alert("Repositório criado!");
      navigation.goBack();
    } else {
      Alert.alert("Erro ao criar repositório!");
    }
  }

  return (
    <View style={estilos.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={estilos.entrada}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={estilos.entrada}
        value={data}
        onChangeText={setData}
      />
      <TouchableOpacity style={estilos.botao} onPress={criar}>
        <Text style={estilos.textoBotao}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
