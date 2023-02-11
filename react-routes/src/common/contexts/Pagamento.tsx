import { createContext, useContext, useState } from "react";
import { TiposDePagamento } from "../../types/PagamentoTypes";
import { tiposPagamento } from "../../utils/PagamentoUtils";

interface PagamentoContextData {
  formaPagamento: TiposDePagamento;
  setFormaPagamento: React.Dispatch<React.SetStateAction<TiposDePagamento>>;
}

export const PagamentoContext = createContext({} as PagamentoContextData);
PagamentoContext.displayName = "Pagamento";

export const PagamentoProvider = ({ children }: any) => {
  const [formaPagamento, setFormaPagamento] = useState<TiposDePagamento>(
    tiposPagamento[0]
  );

  return (
    <PagamentoContext.Provider
      value={{
        formaPagamento,
        setFormaPagamento,
      }}
    >
      {children}
    </PagamentoContext.Provider>
  );
};

export const usePagamentoContext = () => {
  const { formaPagamento, setFormaPagamento } = useContext(PagamentoContext);

  function mudarFormaPagamento(id: number) {
    const formaNova = tiposPagamento.find((pagamento) => pagamento.id === id);
    setFormaPagamento(formaNova ?? tiposPagamento[0]);
  }

  return {
    formaPagamento,
    mudarFormaPagamento,
  };
};
