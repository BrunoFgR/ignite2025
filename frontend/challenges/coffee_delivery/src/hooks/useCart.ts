import { useReducer } from "react";
import { cartReducer, CartStates } from "@/reducers/products/reducer";
import { ProductActionsArgs } from "@/reducers/products/actions";
import { useContextSelector } from "use-context-selector";
import { CartContext, CartContextProps } from "@/context/CartContext";

export function useCartReducer(initialState: CartStates) {
  return useReducer<CartStates, [ProductActionsArgs]>(
    cartReducer,
    initialState,
  );
}

export const useCartContext = <T>(selector: (data: CartContextProps) => T) =>
  useContextSelector<CartContextProps, T>(CartContext, selector);
