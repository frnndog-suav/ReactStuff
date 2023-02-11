export interface CarrinhoContextData {
  carrinho: any[];
  setCarrinho: React.Dispatch<React.SetStateAction<any>>;
  quantidadeCarrinho: number;
  setQuantidadeCarrinho: React.Dispatch<React.SetStateAction<number>>;
  valorTotal: number;
  setValorTotal: React.Dispatch<React.SetStateAction<number>>;
}
