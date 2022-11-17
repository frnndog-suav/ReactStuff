import { useRecoilValue } from "recoil";
import { listaDeParticipantesState } from "../state/atom";

export const useListaDeParticipantes = () => {
  return useRecoilValue(listaDeParticipantesState);
};
