import { createContext, useContext, useEffect, useState } from "react";
import { CarrinhoContextData } from "../../types/CarrinhoTypes";
import { usePagamentoContext } from "./Pagamento";
import { useUsuarioContext } from "./Usuario";

export const CarrinhoContext = createContext({} as CarrinhoContextData);
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({ children }: any) => {
  const [carrinho, setCarrinho] = useState<any[]>([]);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState<number>(0);
  const [valorTotal, setValorTotal] = useState<number>(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidadeCarrinho,
        setQuantidadeCarrinho,
        valorTotal,
        setValorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinhoContext = () => {
  const {
    carrinho,
    setCarrinho,
    quantidadeCarrinho,
    setQuantidadeCarrinho,
    valorTotal,
    setValorTotal,
  } = useContext(CarrinhoContext);

  const { saldo, setSaldo } = useUsuarioContext();

  const { formaPagamento } = usePagamentoContext();

  const mudarQuantidade = (id: any, quantidade: any) =>
    carrinho.map((item) => {
      if (item.id === id) item.quantidade += quantidade;
      return item;
    });

  const adicionarProduto = (novoProduto: any) => {
    const temOProduto = carrinho.some((item) => item.id === novoProduto.id);
    let novoCarrinho = [...carrinho];
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      novoCarrinho.push(novoProduto);
      return setCarrinho(novoCarrinho);
    }
    novoCarrinho = mudarQuantidade(novoProduto.id, 1);
    setCarrinho(novoCarrinho);
  };

  function removerProduto(id: any) {
    const produto = carrinho.find((item) => item.id === id);
    const ultimo = produto.quantidade === 1;
    let novoCarrinho;
    if (ultimo) {
      novoCarrinho = carrinho.filter((item) => item.id !== id);
      return setCarrinho(novoCarrinho);
    }
    novoCarrinho = mudarQuantidade(id, -1);
    setCarrinho(novoCarrinho);
  }

  function comprar() {
    setCarrinho([]);
    setSaldo(saldo - valorTotal);
  }

  useEffect(() => {
    let { novaQuantidade, novoTotal } =
      carrinho === undefined
        ? { novaQuantidade: 0, novoTotal: 0 }
        : carrinho.reduce(
            (contador, novoItem) => ({
              novaQuantidade: contador.novaQuantidade + novoItem.quantidade,
              novoTotal:
                contador.novoTotal + novoItem.valor * novoItem.quantidade,
            }),
            { novaQuantidade: 0, novoTotal: 0 }
          );

    setQuantidadeCarrinho(novaQuantidade);
    setValorTotal(novoTotal * formaPagamento.juros);
  }, [carrinho, formaPagamento, setQuantidadeCarrinho, setValorTotal]);

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    quantidadeCarrinho,
    valorTotal,
    comprar,
  };
};
