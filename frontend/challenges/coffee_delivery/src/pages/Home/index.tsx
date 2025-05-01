import { useState } from "react";
import logo from "../../assets/logo.svg";

export function Home() {
  const [selectedAddress, setSelectedAddress] = useState(
    "Rua da Cafeteria, 123",
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-brown-100 p-4 shadow-md fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Coffee Shop Logo" className="h-10 w-auto" />
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={selectedAddress}
                onChange={(e) => setSelectedAddress(e.target.value)}
                className="pl-8 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brown-300"
              >
                <option value="Rua da Cafeteria, 123">
                  Rua da Cafeteria, 123
                </option>
                <option value="Avenida do Café, 456">
                  Avenida do Café, 456
                </option>
              </select>
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <button className="bg-brown-500 text-white p-2 rounded-full hover:bg-brown-600 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Banner */}
        <section className="bg-brown-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold text-brown-800 mb-4">
                  Descubra o Melhor Café
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  Nossa cafeteria oferece os melhores grãos selecionados de todo
                  o mundo. Trazemos para você uma experiência única de sabor e
                  aroma em cada xícara.
                </p>
                <button className="bg-brown-600 hover:bg-brown-700 text-white px-6 py-3 rounded-lg transition">
                  Conheça Nossos Cafés
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/banner-coffee.jpg"
                  alt="Café especial"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

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
