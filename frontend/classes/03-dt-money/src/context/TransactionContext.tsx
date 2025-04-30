import { createContext, useEffect, useMemo, useState } from "react";
import { api } from "../lib/axios";

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  amount: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextData {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionContextProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

export function TransactionsContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get<Transaction[]>("/transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, amount, category, type } = data;

    const response = await api.post<Transaction>("/transactions", {
      description,
      amount,
      category,
      type,
      createdAt: new Date().toISOString(),
    });

    setTransactions((prevTransactions) => [response.data, ...prevTransactions]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const value = useMemo(
    () => ({
      transactions,
      fetchTransactions,
      createTransaction,
    }),
    [transactions],
  );

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}
