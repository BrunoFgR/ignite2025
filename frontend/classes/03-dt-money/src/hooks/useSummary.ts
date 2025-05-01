import { useMemo } from "react";
import { TransactionsContext } from "../context/TransactionContext";
import { useContextSelector } from "use-context-selector";

export const useSummary = () => {
  const { transactions } = useContextSelector(
    TransactionsContext,
    ({ transactions }) => ({
      transactions,
    }),
  );

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.outcome += transaction.amount;
          acc.total -= transaction.amount;
        }
        return acc;
      },
      { income: 0, outcome: 0, total: 0 },
    );
  }, [transactions]);

  return summary;
};
