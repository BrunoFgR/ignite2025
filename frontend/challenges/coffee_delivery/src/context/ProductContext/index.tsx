import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { mainUrl } from "../../lib/axios";

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
  updateList: () => Promise<void>;
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
    const { data } = await mainUrl.get<Product[]>("/coffees");
    setProducts(data);
  }, []);

  const updateList = useCallback(async () => {
    await fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider value={{ products, updateList }}>
      {children}
    </ProductContext.Provider>
  );
};
