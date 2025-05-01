import { Route, Routes } from "react-router";
import { Checkout, Home } from "./pages";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
