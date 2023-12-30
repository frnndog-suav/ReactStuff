import { useEffect, useState } from "react";
import { api } from "../services/axios";
import { createContext } from "use-context-selector";

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

  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "desc",
      },
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionData) {
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
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
