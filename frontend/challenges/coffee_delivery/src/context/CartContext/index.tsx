import { useCartReducer } from "@/hooks/useCart";
import { CartItem } from "@/reducers/cart/reducer";
import { useCallback } from "react";
import { createContext } from "use-context-selector";

export interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateCart: (productId: number, quantity: number) => void;
  cleanCart: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useCartReducer({ cart: [] });

  const { cart } = state;

  const addToCart = useCallback(
    (product: CartItem) => {
      dispatch({ type: "ADD_IN_CART", payload: { newProduct: product } });
    },
    [dispatch],
  );

  const removeFromCart = useCallback(
    (productId: number) => {
      dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
    },
    [dispatch],
  );

  const updateCart = useCallback(
    (productId: number, quantity: number) => {
      dispatch({ type: "UPDATE_ITEM", payload: { productId, quantity } });
    },
    [dispatch],
  );

  const cleanCart = useCallback(() => {
    dispatch({ type: "CLEAN_CART" });
  }, [dispatch]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateCart,
    cleanCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
