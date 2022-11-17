import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../hooks/useAdicionarParticipante";
import { useMensagemDeErro } from "../../hooks/useMensagemErro";

export const Formulario = () => {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLFormElement>(null);
  const adicionarNaLista = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!nome}>Adicionar</button>
      {mensagemDeErro && <p role={"alert"}>{mensagemDeErro}</p>}
    </form>
  );
};
