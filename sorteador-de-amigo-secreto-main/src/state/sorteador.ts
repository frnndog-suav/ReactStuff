import { useSetRecoilState } from "recoil";
import { realizarSorteio } from "../helpers/RealizarSorteio/realizarSorteio";
import { useListaDeParticipantes } from "../hooks/useListaDeParticipantes";
import { resultadoDoAmigoSecreto } from "./atom";

export const useSorteador = () => {
  const participantes = useListaDeParticipantes();
  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);

  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
};
