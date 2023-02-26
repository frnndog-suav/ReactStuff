import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoria } from "../../interfaces/ICategoria";
import { http } from "../../services/api";
import BotaoNavegacao from "../BotaoNavegacao";
import logo from "./assets/logo.png";
import usuario from "./assets/usuario.svg";
import "./BarraNavegacao.css";

const BarraNavegacao = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([]);

  useEffect(() => {
    http
      .get<ICategoria[]>("categorias")
      .then((res) => {
        setCategorias(res.data);
      })
      .catch((err) => {
        alert("Deu ruim! " + err);
      });
  }, []);

  return (
    <nav className="ab-navbar">
      <h1 className="logo">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo da AluraBooks" />
        </Link>
      </h1>
      <ul className="navegacao">
        <li>
          <a href="#!">Categorias</a>
          <ul className="submenu">
            {categorias.map((categoria, key) => (
              <li key={key}>
                <Link to={`/categorias/${categoria.slug}`}>
                  {categoria.nome}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <ul className="acoes">
        <li>
          <BotaoNavegacao
            texto="Login"
            textoAltSrc="Icone representando um usuário"
            imagemSrc={usuario}
          />
        </li>
        <li>
          <BotaoNavegacao
            texto="Cadastrar-se"
            textoAltSrc="Icone representando um usuário"
            imagemSrc={usuario}
          />
          {/* <ModalCadastroUsuario /> */}
        </li>
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
