import { useQuery } from "@tanstack/react-query";
import { ICategoria } from "../../interfaces/ICategoria";
import { obterProdutosDaCategoria } from "../../services/api";
import { CardLivro } from "../CardLivro";
import "./ListaLivros.css";

interface ListaLivrosProps {
  categoria: ICategoria;
}

export const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const { data: produtos } = useQuery(
    ["buscaDeLivrosPorCategoria", categoria],
    () => obterProdutosDaCategoria(categoria)
  );

  return (
    <>
      {produtos?.map((livro) => (
        <section className="livros">
          <CardLivro livro={livro} key={livro.id} />
        </section>
      ))}
    </>
  );
};
