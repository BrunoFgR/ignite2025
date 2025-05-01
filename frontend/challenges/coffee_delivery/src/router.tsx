import { Route, Routes } from "react-router";
import { Checkout, Home } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}
