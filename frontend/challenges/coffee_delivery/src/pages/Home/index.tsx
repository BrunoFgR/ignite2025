import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Banner />
        {/* Product Cards */}
        <section className="px-40 py-8">
          <div className="flex flex-col gap-14">
            <h2 className="font-montserrat text-title-lg font-extrabold text-base-title">
              Nossos cafés
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
