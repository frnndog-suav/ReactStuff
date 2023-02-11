import {
  Alert,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrinhoContext } from "../../common/contexts/Carrinho";
import { usePagamentoContext } from "../../common/contexts/Pagamento";
import { useUsuarioContext } from "../../common/contexts/Usuario";
import Produto from "../../components/Produto";
import { tiposPagamento } from "../../utils/PagamentoUtils";
import { Container, PagamentoContainer, TotalContainer } from "./styles";

export const  Carrinho = () => {
  const {
    carrinho,
    quantidadeCarrinho,
    comprar,
    valorTotal = 0,
  } = useCarrinhoContext();
  const { saldo = 0 } = useUsuarioContext();
  const { formaPagamento, mudarFormaPagamento } = usePagamentoContext();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const total = useMemo(() => saldo - valorTotal, [saldo, valorTotal]);

  return (
    <Container>
      {/* Exemplo de nested routes
      <Link to={"/carrinho/1"} >nested route 1</Link>
      <Link to={"/carrinho/2"} >nested route 1</Link>
      <Link to={"/carrinho/3"} >nested route 1</Link> */}
      <Button onClick={() => navigate(-1)}>Voltar</Button>
      <h2>Carrinho</h2>
      {carrinho.map((produto) => (
        <Produto {...produto} key={produto.id} />
      ))}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        <Select
          value={formaPagamento.id}
          onChange={(event) =>
            mudarFormaPagamento(event.target.value as number)
          }
        >
          {tiposPagamento.map((pagamento) => (
            <MenuItem value={pagamento.id} key={pagamento.id}>
              {pagamento.nome}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {valorTotal.toFixed(2)}</span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ {saldo.toFixed(2)} </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ {total.toFixed(2)} </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          comprar();
          setOpenSnackbar(true);
        }}
        disabled={quantidadeCarrinho === 0 || total < 0}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          Compra feita com sucesso!
        </Alert>
      </Snackbar>
    </Container>
  );
};
