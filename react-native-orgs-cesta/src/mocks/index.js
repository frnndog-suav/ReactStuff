import farmLogo from "../../assets/logo.png";
import tomate from "../../assets/frutas/Tomate.png";
import abobora from "../../assets/frutas/Abóbora.png";
import batata from "../../assets/frutas/Batata.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import pepino from "../../assets/frutas/Pepino.png";

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de verduras",
    nomeDaFazenda: "Jenny and Jack farms",
    descricao:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha",
    preco: "R$ 40,00",
    logoFazenda: farmLogo
  },
  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: "Tomate",
        imagem: tomate
      },
      {
        nome: "Abóbora",
        imagem: abobora
      },
      {
        nome: "Batata",
        imagem: batata
      },
      {
        nome: "Brócolis",
        imagem: brocolis
      },
      {
        nome: "Pepino",
        imagem: pepino
      },
    ]
  }
};

export default cesta;
