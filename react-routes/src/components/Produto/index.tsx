import { Container, IconButton } from "@mui/material";
import { memo } from "react";
import { useCarrinhoContext } from "../../common/contexts/Carrinho";
import { useUsuarioContext } from "../../common/contexts/Usuario";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ProdutoProps {
  nome: any;
  foto: any;
  id: any;
  valor: any;
  unidade: any;
}

const Produto = ({ nome, foto, id, valor, unidade }: ProdutoProps) => {
  const { carrinho, adicionarProduto, removerProduto, valorTotal } =
    useCarrinhoContext();
  const { saldo } = useUsuarioContext();
  const itemNoCarrinho = carrinho.find((item) => item.id === id);

  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          onClick={() => removerProduto(id)}
          disabled={!itemNoCarrinho || itemNoCarrinho.quantidade === 0}
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>
        {itemNoCarrinho?.quantidade || 0}
        <IconButton
          disabled={valorTotal > saldo}
          onClick={() =>
            adicionarProduto({
              nome,
              foto,
              id,
              valor,
              unidade,
            })
          }
          color="primary"
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
};

export default memo(Produto);
