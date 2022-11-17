import { useRecoilValue, useSetRecoilState } from "recoil";
import { erroState, listaDeParticipantesState } from "../state/atom";

export const useAdicionarParticipante = () => {
  const lista = useRecoilValue(listaDeParticipantesState);
  const setLista = useSetRecoilState(listaDeParticipantesState);
  const setErro = useSetRecoilState(erroState);

  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro("Nomes duplicados não são permitidos");
      setTimeout(() => {
        setErro("");
      }, 5000);
      return;
    }
    return setLista((listaAtual) => [...listaAtual, nomeDoParticipante]);
  };
};
