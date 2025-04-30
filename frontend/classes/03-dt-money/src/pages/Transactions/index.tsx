import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./styles";
import { SearchForm } from "./components/SearchForm";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: "income" | "outcome";
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions() {
    const response = await fetch("http://localhost:3333/transactions");
    const data = await response.json();
    setTransactions(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.amount.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
