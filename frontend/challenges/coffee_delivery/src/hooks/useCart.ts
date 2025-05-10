import { useReducer } from "react";
import { cartReducer, CartStates } from "@/reducers/cart/reducer";
import { ProductActionsArgs } from "@/reducers/cart/actions";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/context/CartContext";

export function useCartReducer(initialState: CartStates) {
  return useReducer<CartStates, [ProductActionsArgs]>(
    cartReducer,
    initialState,
  );
}

export const useCartContext = () => {
  return useContextSelector(CartContext, (context) => context);
};
