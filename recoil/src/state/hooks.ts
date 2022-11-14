import { useRecoilValue, useSetRecoilState } from "recoil";
import { IEvento } from "./../interfaces/IEvento";
import { listaDeEventosState } from "./atom";
import { eventosFiltradosState } from "./seletores";
export const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    return setListaDeEventos((listaAntiga) => {
      const index = listaAntiga.findIndex((evt) => evt.id === evento.id);
      return [
        ...listaAntiga.slice(0, index),
        evento,
        ...listaAntiga.slice(index + 1),
      ];
    });
  };
};

export const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();

    if (evento.inicio < hoje) {
      throw new Error(
        "Eventos não podem ser cadastrados com datas menores que a atual"
      );
    }

    evento.id = Date.now();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };
};

export const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState);
};
