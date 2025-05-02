import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import banner_coffee from "../../assets/banner-coffee.png";

export function Banner() {
  return (
    <section className="flex px-40 py-24">
      <div className="flex flex-1 justify-between">
        <div className="flex w-7/12 flex-col gap-15">
          <div className="flex flex-col gap-4">
            <h1 className="font-montserrat text-title-xl font-extrabold text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-title-sm text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-x-10 gap-y-5">
            <div className="flex w-57 items-center gap-3">
              <div className="h-8 w-8 rounded-2xl bg-yellow-dark p-2">
                <ShoppingCart className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base-text">Compra simples e segura</p>
            </div>
            <div className="flex w-73 items-center gap-3">
              <div className="h-8 w-8 rounded-2xl bg-base-text p-2">
                <Package className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base-text">Embalagem mantém o café intacto</p>
            </div>
            <div className="flex w-57 items-center gap-3">
              <div className="h-8 w-8 rounded-2xl bg-yellow p-2">
                <Timer className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base-text">Entrega rápida e rastreada</p>
            </div>
            <div className="flex w-73 items-center gap-3">
              <div className="h-8 w-8 rounded-2xl bg-purple p-2">
                <Coffee className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base-text">O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <img src={banner_coffee} alt="Café especial" />
        </div>
      </div>
    </section>
  );
}
