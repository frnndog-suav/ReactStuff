import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador(props: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={props.busca}
        onChange={(evento) => props.setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4c4d5f" />
    </div>
  );
}
