import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./pages/Transactions/styles";
import { SearchForm } from "./pages/Transactions/components/SearchForm";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>26/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Conta de energia</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.000,00</PriceHighlight>
              </td>
              <td>Conta</td>
              <td>26/04/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </ThemeProvider>
  );
}
