import api from "../api";

export type Repositorio = {
  data: string;
  id: number;
  name: string;
  postId: number;
};

export async function buscaRepositoriosDoUsuario(id: number) {
  try {
    const resultado = await api.get(`/repos?postId=${id}`);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function salvarRepositoriosDoUsuario(repo: Repositorio) {
  try {
    await api.put(`/repos/${repo.id}`, repo);
    return "Sucesso";
  } catch (error) {
    console.log(error);
    return "Erro";
  }
}
