import { CartItem } from "./reducer";

export type ProductActionsArgs =
  | { type: "ADD_IN_CART"; payload: { newProduct: CartItem } }
  | { type: "REMOVE_FROM_CART"; payload: { productId: number } }
  | { type: "CLEAN_CART" }
  | {
      type: "UPDATE_ITEM";
      payload: { quantity: number; productId: number };
    };

export function addNewProductAction(newProduct: CartItem): ProductActionsArgs {
  return {
    type: "ADD_IN_CART",
    payload: { newProduct },
  };
}

export function removeProductAction(productId: number): ProductActionsArgs {
  return {
    type: "REMOVE_FROM_CART",
    payload: { productId },
  };
}

export function cleanCartAction(): ProductActionsArgs {
  return {
    type: "CLEAN_CART",
  };
}

export function updateCartAction(
  quantity: number,
  productId: number,
): ProductActionsArgs {
  return {
    type: "UPDATE_ITEM",
    payload: { quantity, productId },
  };
}
