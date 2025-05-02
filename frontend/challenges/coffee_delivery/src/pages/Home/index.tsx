import { Banner } from "../../components/Banner";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Banner />
        {/* Product Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-brown-800 mb-10">
              Nossos Cafés Especiais
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
                <img
                  src="/espresso.jpg"
                  alt="Espresso"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown-800 mb-2">
                    Espresso Clássico
                  </h3>
                  <p className="text-gray-600 mb-4">
                    O tradicional café feito com água quente e grãos moídos
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-brown-700 font-bold">R$ 9,90</span>
                    <button className="bg-brown-500 hover:bg-brown-600 text-white px-4 py-2 rounded-full transition">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
                <img
                  src="/latte.jpg"
                  alt="Café Latte"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown-800 mb-2">
                    Café Latte
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Café espresso com leite vaporizado e uma fina camada de
                    espuma
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-brown-700 font-bold">R$ 12,90</span>
                    <button className="bg-brown-500 hover:bg-brown-600 text-white px-4 py-2 rounded-full transition">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
                <img
                  src="/cappuccino.jpg"
                  alt="Cappuccino"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown-800 mb-2">
                    Cappuccino
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Uma mistura de doses iguais de café espresso, leite
                    vaporizado e espuma
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-brown-700 font-bold">R$ 14,90</span>
                    <button className="bg-brown-500 hover:bg-brown-600 text-white px-4 py-2 rounded-full transition">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
