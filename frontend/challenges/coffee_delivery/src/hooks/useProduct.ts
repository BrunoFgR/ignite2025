import { useContextSelector } from "use-context-selector";
import { ProductContext, ProductContextData } from "@/context/ProductContext";

export const useProductContext = <T>(
  selector: (data: ProductContextData) => T,
) => useContextSelector<ProductContextData, T>(ProductContext, selector);
