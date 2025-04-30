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
  fetchTransactions: (query?: string) => Promise<void>;
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
    const url = new URL("http://localhost:3333/transactions");
    if (query) {
      url.searchParams.append("q", query);
    }

    const response = await fetch(url.toString());
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const value = useMemo(
    () => ({
      transactions,
      fetchTransactions,
    }),
    [transactions],
  );

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}
