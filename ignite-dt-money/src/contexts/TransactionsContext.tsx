import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/axios";

interface CreateTransactionData {
  category: string;
  description: string;
  price: number;
  type: "income" | "outcome";
}

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

type TransactionContextType = {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction(data: CreateTransactionData): Promise<void>;
};

export const TransactionContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "desc",
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    const { category, description, price, type } = data;

    const response = await api.post("transactions", {
      category,
      description,
      price,
      type,
      createdAt: new Date(),
    });

    setTransactions((currentTransactions) => [
      response.data,
      ...currentTransactions,
    ]);
  }, []);

  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
