import { useState } from "react";
import { useListaDeParticipantes } from "../../hooks/useListaDeParticipantes";
import { useResultadoDoSorteio } from "../../hooks/useResultadoDoSorteio";

import "./Sorteio.css";

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoScreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoDoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <section className="sorteio">
      <h2>Quem vai tirar o papelzinho?</h2>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDavez"
          id="participanteDavez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <button className="botao-sortear">Sortear</button>
      </form>
      {amigoScreto && (
        <p className="resultado" role="alert">
          {amigoScreto}
        </p>
      )}
      <footer className="sorteio">
        <img
          src="/imagens/aviao.png"
          className="aviao"
          alt="Um desenho de um avião de papel"
        />
      </footer>
    </section>
  );
};

export default Sorteio;
