import { useListaDeParticipantes } from "../../hooks/useListaDeParticipantes";

export const ListaDeParticipantes = () => {
  const participantes: string[] = useListaDeParticipantes();

  return (
    <ul>
      {participantes.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
};
