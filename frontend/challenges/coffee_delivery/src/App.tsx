import { BrowserRouter } from "react-router";
import { Router } from "./router";
import { ProductContextProvider } from "./context/ProductContext";

export default function App() {
  return (
    <ProductContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ProductContextProvider>
  );
}
