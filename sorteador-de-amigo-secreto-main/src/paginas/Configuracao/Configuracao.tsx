import React from "react";
import { Formulario } from "../../components/Formulario/Formulario";
import { ListaDeParticipantes } from "../../components/ListaDeParticipantes/ListaDeParticipantes";
import { Rodape } from "../../components/Rodape/Rodape";

export const Configuracao = () => {
  return (
    <React.Fragment>
      <Formulario />
      <ListaDeParticipantes />
      <Rodape />
    </React.Fragment>
  );
};
