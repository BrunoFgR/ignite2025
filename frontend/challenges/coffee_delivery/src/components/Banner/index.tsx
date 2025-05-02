import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import banner_coffee from "../../assets/banner-coffee.png";

export function Banner() {
  return (
    <section className="flex flex-col px-4 py-8 sm:px-6 md:flex-row md:px-10 md:py-16 lg:px-20 lg:py-24 xl:px-40">
      <div className="flex w-full flex-1 flex-col-reverse justify-between gap-8 md:flex-row md:gap-4">
        <div className="flex w-full flex-col gap-6 md:w-7/12 md:gap-10 lg:gap-15">
          <div className="flex flex-col gap-4">
            <h1 className="font-montserrat text-2xl font-extrabold text-base-title sm:text-3xl lg:text-title-xl">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base text-base-subtitle sm:text-lg lg:text-title-sm">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 gap-y-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5 md:gap-x-8 lg:gap-x-10 xl:grid-cols-[1fr_2fr]">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 flex-shrink-0 rounded-2xl bg-yellow-dark p-2">
                <ShoppingCart className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-sm text-base-text sm:text-base">
                Compra simples e segura
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 flex-shrink-0 rounded-2xl bg-base-text p-2">
                <Package className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-sm text-base-text sm:text-base">
                Embalagem mantém o café intacto
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 flex-shrink-0 rounded-2xl bg-yellow p-2">
                <Timer className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-sm text-base-text sm:text-base">
                Entrega rápida e rastreada
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 flex-shrink-0 rounded-2xl bg-purple p-2">
                <Coffee className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-sm text-base-text sm:text-base">
                O café chega fresquinho até você
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center md:w-auto md:justify-end">
          <img
            src={banner_coffee}
            alt="Café especial"
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
