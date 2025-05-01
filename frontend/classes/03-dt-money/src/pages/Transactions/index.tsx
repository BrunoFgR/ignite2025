import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./styles";
import { SearchForm } from "./components/SearchForm";
import { TransactionsContext } from "../../context/TransactionContext";
import { formatCurrency, formatDate } from "../../utils/formatter";
import { useContextSelector } from "use-context-selector";

export function Transactions() {
  const { transactions } = useContextSelector(
    TransactionsContext,
    ({ transactions }) => ({
      transactions,
    }),
  );

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
                    {transaction.type === "outcome"
                      ? `- ${formatCurrency(transaction.amount)}`
                      : formatCurrency(transaction.amount)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
