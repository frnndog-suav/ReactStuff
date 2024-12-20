import { useNavigate } from "react-router-dom";
import { useListaDeParticipantes } from "../../hooks/useListaDeParticipantes";
import { useSorteador } from "../../state/sorteador";

export const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navegarPara = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara("/sorteio");
  };

  return (
    <footer>
      <button disabled={participantes.length < 3} onClick={iniciar}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};
