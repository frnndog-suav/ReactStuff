import { resultadoDoAmigoSecreto } from "../state/atom";
import { useRecoilValue } from "recoil";

export const useResultadoDoSorteio = () => {
  return useRecoilValue(resultadoDoAmigoSecreto);
};
