import { useUsuarioContext } from "../../common/contexts/Usuario";
import Produto from "../../components/Produto";
import { NavBar } from "./NavBar";
import { Container, Header, Lista } from "./styles";
import feira from './feira.json';

export const Feira = () => {
  const { nome, saldo = 0 } = useUsuarioContext();
  
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá {nome}!</h2>
          <h3> Saldo: R${saldo.toFixed(2)}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>Produtos:</h2>
        {feira.map((produto) => (
          <Produto unidade={undefined} {...produto} key={produto.id} />
        ))}
      </Lista>
    </Container>
  );
};
