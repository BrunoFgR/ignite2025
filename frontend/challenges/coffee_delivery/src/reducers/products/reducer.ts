import { produce } from "immer";
import { ProductActionsArgs } from "./actions";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  stock: number;
  image: string;
}

export interface CartStates {
  cart: CartItem[];
}

export function cartReducer(
  state: CartStates,
  actions: ProductActionsArgs,
): CartStates {
  switch (actions.type) {
    case "ADD_IN_CART":
      return produce(state, (draft) => {
        const findProduct = draft.cart.find(
          (product) => product.id === actions.payload.newProduct.id,
        );

        if (!findProduct) {
          draft.cart.push(actions.payload.newProduct);
        } else {
          findProduct.quantity = actions.payload.newProduct.quantity;
        }
      });
    case "REMOVE_FROM_CART": {
      const currentProductIndex = state.cart.findIndex(
        (product) => product.id === actions.payload.productId,
      );

      if (currentProductIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.cart.splice(currentProductIndex, 1);
      });
    }
    case "UPDATE_ITEM": {
      const currentProductIndex = state.cart.findIndex(
        (product) => product.id === actions.payload.productId,
      );

      if (currentProductIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        const product = draft.cart[currentProductIndex];
        if (actions.payload.quantity === 0) {
          draft.cart.splice(currentProductIndex, 1);
        }

        product.quantity = actions.payload.quantity;
      });
    }
  }

  return state;
}
