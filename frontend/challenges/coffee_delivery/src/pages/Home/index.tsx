import { useContextSelector } from "use-context-selector";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { ProductContext } from "../../context/ProductContext";

export function Home() {
  const products = useContextSelector(
    ProductContext,
    ({ products }) => products,
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Banner />
        {/* Product Cards */}
        <section className="px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-40">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14">
            <h2 className="font-montserrat text-xl font-extrabold text-base-title md:text-2xl lg:text-title-lg">
              Nossos cafés
            </h2>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
              {products.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
