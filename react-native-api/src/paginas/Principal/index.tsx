import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Usuario, buscaUsuario } from "../../servicos/requisicoes/usuarios";
import estilos from "./estilos";

interface PrincipalProps {
  navigation: any;
}

export default function Principal({ navigation }: PrincipalProps) {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [usuario, setUsuario] = useState<Usuario>({});

  const busca = async () => {
    const resultado = await buscaUsuario(nomeUsuario);

    if (resultado) {
      setUsuario(resultado);
    } else {
      Alert.alert("Usuário não encontrado");
      setUsuario({});
    }
  };

  return (
    <ScrollView>
      <View style={estilos.container}>
        {usuario.login && (
          <>
            <View style={estilos.fundo} />
            <View style={estilos.imagemArea}>
              <Image
                source={{
                  uri: usuario.avatarUrl,
                }}
                style={estilos.imagem}
              />
            </View>
            <Text style={estilos.textoNome}>{usuario.name}</Text>
            <Text style={estilos.textoEmail}>{usuario.email}</Text>
            <View style={estilos.seguidoresArea}>
              <View style={estilos.seguidores}>
                <Text style={estilos.seguidoresNumero}>
                  {usuario.followers}
                </Text>
                <Text style={estilos.seguidoresTexto}>Seguidores</Text>
              </View>
              <View style={estilos.seguidores}>
                <Text style={estilos.seguidoresNumero}>
                  {usuario.following}
                </Text>
                <Text style={estilos.seguidoresTexto}>Seguindo</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Repositorios")}>
              <Text style={estilos.repositorios}>Ver os repositórios</Text>
            </TouchableOpacity>
          </>
        )}

        <TextInput
          placeholder="Busque por um usuário"
          autoCapitalize="none"
          style={estilos.entrada}
          value={nomeUsuario}
          onChangeText={setNomeUsuario}
        />

        <TouchableOpacity style={estilos.botao} onPress={busca}>
          <Text style={estilos.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
