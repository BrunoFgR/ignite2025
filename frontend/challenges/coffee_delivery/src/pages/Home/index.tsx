import { useContextSelector } from "use-context-selector";
import { Banner } from "./sections/Banner";
import { CoffeeCard } from "./sections/ListCoffee/CoffeeCard";
import { ProductContext } from "../../context/ProductContext";
import { ListCoffee } from "./sections/ListCoffee";

export function Home() {
  const products = useContextSelector(
    ProductContext,
    ({ products }) => products,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Banner />
        <ListCoffee products={products} />
      </main>
    </div>
  );
}
