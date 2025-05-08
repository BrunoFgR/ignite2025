import { BrowserRouter } from "react-router";
import { Router } from "./router";
import { ProductContextProvider } from "@/context/ProductContext";
import { Toaster } from "@/components/ui/toaster";
import { CartContextProvider } from "@/context/CartContext";
import { ThemeProvider } from "./themes/ThemeProvider";

export default function App() {
  return (
    <CartContextProvider>
      <ProductContextProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Router />
            <Toaster />
          </BrowserRouter>
        </ThemeProvider>
      </ProductContextProvider>
    </CartContextProvider>
  );
}
