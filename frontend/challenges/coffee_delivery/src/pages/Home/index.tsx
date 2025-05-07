import { useProductContext } from "@/hooks/useProduct";
import { Banner } from "./sections/Banner";
import { ListCoffee } from "./sections/ListCoffee";

export function Home() {
  const { products } = useProductContext(({ products }) => ({ products }));

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Banner />
        <ListCoffee products={products} />
      </main>
    </div>
  );
}
