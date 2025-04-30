import { createContext, useEffect, useMemo, useState } from "react";

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

interface TransactionContextData {
  transactions: Transaction[];
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

  async function fetchTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const value = useMemo(
    () => ({
      transactions,
    }),
    [transactions],
  );

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}
