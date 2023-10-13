import api from "../api";

export type Usuario = {
  login?: string;
  id?: number;
  avatarUrl?: string;
  name?: string;
  email?: string;
  followers?: number;
  following?: number;
};

type Response = {
  data: Usuario[];
};

export async function buscaUsuario(nomeUsuario: string) {
  try {
    const resultado = await api.get(`/users?login=${nomeUsuario}`);
    return resultado.data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
}
