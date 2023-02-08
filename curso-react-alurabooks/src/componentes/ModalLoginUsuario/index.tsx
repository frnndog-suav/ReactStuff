import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks";
import { useState } from "react";
import { http } from "../../service/api";
import imagem from "../ModalCadastroUsuario/assets/login.png";
import "./ModalLoginUsuario.css";

interface ModalLoginUsuarioProps {
  aberta: boolean;
  aoFechar: () => void;
  aoEfetuarLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalLoginUsuario = ({
  aberta,
  aoFechar,
  aoEfetuarLogin,
}: ModalLoginUsuarioProps) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const aoSubmeterFormulario = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const usuario = {
      email,
      senha,
    };

    http
      .post("public/login", usuario)
      .then((res) => {
        sessionStorage.setItem("token", res.data.access_token);
        aoEfetuarLogin(true);
        setEmail("");
        setSenha("");
        aoFechar();
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          alert("Deu erro. " + err);
        }
      });
  };

  return (
    <AbModal aberta={aberta} aoFechar={aoFechar} titulo="Login">
      <section className="corpoModalLogin">
        <figure>
          <img
            src={imagem}
            alt="Pessoa segurando uma chave na frente de uma tela de computador que está exibindo uma fechadura"
          />
        </figure>
        <section className="areaDoFormulario">
          <form onSubmit={aoSubmeterFormulario}>
            <AbCampoTexto
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
            />
            <AbCampoTexto
              label="Senha"
              type="password"
              value={senha}
              onChange={setSenha}
            />
            <section className="acoes">
              <p className="esqueciMinhaSenha">Esqueci minha senha</p>
              <AbBotao texto="Fazer login" />
            </section>
            <div className="line"></div>
            <section className="acoes">
              <h3>Ainda não tem uma conta? </h3>
              <AbBotao texto="Criar conta" />
            </section>
          </form>
        </section>
      </section>
    </AbModal>
  );
};
