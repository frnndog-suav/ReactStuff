import { AbBotao } from "ds-alurabooks";
import { Link } from "react-router-dom";
import { ILivro } from "../../interfaces/ILivro";
import { formatador } from "../../utils/formatadorMoeda";
import "./CardLivro.css";
import { obterValorMinimo } from "./helper";

interface CardLivroProps {
  livro: ILivro;
}

export const CardLivro = ({ livro }: CardLivroProps) => {
  return (
    <div className="livro" key={livro.id}>
      <img src={livro.imagemCapa} alt={livro.descricao} />
      <ul>
        <li>
          <strong>{livro.titulo}</strong>
        </li>
        <li>
          A partir de:{" "}
          <strong>{formatador.format(obterValorMinimo(livro))}</strong>
        </li>
        <li className="link-container">
          <Link to={`livro/${livro.slug}`}>
            <AbBotao texto="Comprar" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
