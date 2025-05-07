import { Product } from "@/context/ProductContext";
import { CoffeeCard } from "./components/CoffeeCard";
import { SkeletonCard } from "./components/SkeletonCard";

interface ListCoffeeProps {
  products: Product[];
}

export function ListCoffee({ products }: ListCoffeeProps) {
  return (
    <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-40">
      <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
        <h2 className="lg:text-title-lg font-title-title-l text-xl font-extrabold text-base-subtitle md:text-2xl">
          Nossos cafés
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {!products.length &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
              <SkeletonCard key={value} />
            ))}

          {products.map((product) => (
            <CoffeeCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
