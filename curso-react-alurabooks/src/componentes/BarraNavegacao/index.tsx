import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BotaoNavegacao from "../BotaoNavegacao";
import ModalCadastroUsuario from "../ModalCadastroUsuario";
import { ModalLoginUsuario } from "../ModalLoginUsuario";
import logo from "./assets/logo.png";
import usuario from "./assets/usuario.svg";
import "./BarraNavegacao.css";

const BarraNavegacao = () => {
  const [modalCadastroAberta, setModalDeCadastroAberta] =
    useState<boolean>(false);
  const [modalLoginAberta, setModalLoginAberta] = useState<boolean>(false);
  const token = sessionStorage.getItem("token");
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(
    token !== null
  );
  const navigate = useNavigate();

  const efetuarLogout = () => {
    setUsuarioEstaLogado(false);
    sessionStorage.removeItem("token");
    navigate("/");
  };

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
            <li>
              <Link to="/">Frontend</Link>
            </li>
            <li>
              <Link to="/">Programação</Link>
            </li>
            <li>
              <Link to="/">Infraestrutura</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
            <li>
              <Link to="/">Design e UX</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="acoes">
        {!usuarioEstaLogado && (
          <React.Fragment>
            <li>
              <BotaoNavegacao
                texto="Login"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalLoginAberta(true)}
              />
              <ModalLoginUsuario
                aberta={modalLoginAberta}
                aoFechar={() => setModalLoginAberta(false)}
                aoEfetuarLogin={setUsuarioEstaLogado}
              />
            </li>
            <li>
              <BotaoNavegacao
                texto="Cadastrar-se"
                textoAltSrc="Icone representando um usuário"
                imagemSrc={usuario}
                onClick={() => setModalDeCadastroAberta(true)}
              />
              <ModalCadastroUsuario
                aberta={modalCadastroAberta}
                aoFechar={() => setModalDeCadastroAberta(false)}
              />
            </li>
          </React.Fragment>
        )}
        {usuarioEstaLogado && (
          <React.Fragment>
            <li>
              <Link to="/area-logada">Minha conta</Link>
            </li>
            <li>
              <BotaoNavegacao
                texto="Logou"
                textoAltSrc="Icone representando usuário"
                imagemSrc={usuario}
                onClick={efetuarLogout}
              />
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default BarraNavegacao;
