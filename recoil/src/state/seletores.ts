import { selector } from "recoil";
import { IEvento } from "./../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "./atom";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventos = todosOsEventos.filter((evt) => {
      if (!filtro.data) {
        return true;
      }
      return (
        filtro.data.toISOString().slice(0, 10) ===
        evt.inicio.toISOString().slice(0, 10)
      );
    });
    return eventos;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respostaHttp = await fetch("http://localhost:8080/eventos");
    const eventosJson: IEvento[] = await respostaHttp.json();
    return eventosJson.map((evt) => ({
      ...evt,
      inicio: new Date(evt.inicio),
      fim: new Date(evt.fim),
    }));
  },
});
