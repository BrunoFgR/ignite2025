import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { productsURL } from "../../lib/axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  amount: number;
}

interface ProductContextProviderProps {
  children: React.ReactNode;
}

export interface ProductContextData {
  products: Product[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext<ProductContextData>(
  {} as ProductContextData,
);

export const ProductContextProvider = ({
  children,
}: ProductContextProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const { data } = await productsURL.get<Product[]>("/coffees");
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
