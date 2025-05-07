import { BrowserRouter } from "react-router";
import { Router } from "./router";
import { ProductContextProvider } from "@/context/ProductContext";
import { Toaster } from "@/components/ui/toaster";
import { CartContextProvider } from "@/context/CartContext";

export default function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Router />
          <Toaster />
        </BrowserRouter>
      </ProductContextProvider>
    </CartContextProvider>
  );
}
