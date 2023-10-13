import React, { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import {
  Repositorio,
  buscaRepositoriosDoUsuario,
} from "../../servicos/requisicoes/repositorios";
import estilos from "./estilos";

interface RepositoriosProps {
  route: any;
  navigation: any;
}

export default function Repositorios({ route, navigation }: RepositoriosProps) {
  const [repo, setRepo] = useState<Repositorio[]>([]);

  useEffect(() => {
    const test = async () => await buscaRepositoriosDoUsuario(route.params.id);
    test()
      .then((response) => {
        console.log(response);
        setRepo(response);
      })
      .catch(() => {
        Alert.alert("Repositórios não encontrado");
        setRepo([]);
      });
  }, []);

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
      <FlatList
        data={repo}
        style={{ width: "100%" }}
        keyExtractor={(repo) => String(repo.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.repositorio}
            onPress={() => navigation.navigate("InfoRepositorio", { item })}>
            <Text style={estilos.repositorioNome}>{item.name}</Text>
            <Text style={estilos.repositorioData}>
              Atualizado em {item.data}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
