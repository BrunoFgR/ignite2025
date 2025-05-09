import { useContextSelector } from "use-context-selector";
import { ProductContext } from "@/context/ProductContext";

export const useProductContext = () =>
  useContextSelector(ProductContext, (context) => context);
