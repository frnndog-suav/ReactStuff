import { useEffect, useState } from "react";
import { carregaProdutores } from "../services/loadData";

export const useProdutores = () => {
  const [titulo, setTitulo] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const response = carregaProdutores();
    setTitulo(response.titulo);
    setLista(response.lista);
  }, []);

  return [titulo, lista];
};

export default useProdutores;
