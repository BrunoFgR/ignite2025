import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import banner_coffee from "../../assets/banner-coffee.png";

export function Banner() {
  return (
    <section className="flex px-40 py-24">
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col gap-15 w-1/2">
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold font-serif text-title_xl text-base_title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-base_subtitle text-title_sm">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-x-10 gap-y-5">
            <div className="flex gap-3 items-center w-57">
              <div className="h-8 w-8 rounded-2xl bg-yellow_dark p-2">
                <ShoppingCart className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base_text">Compra simples e segura</p>
            </div>
            <div className="flex gap-3 items-center w-73">
              <div className="h-8 w-8 rounded-2xl bg-base_text p-2">
                <Package className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base_text">Embalagem mantém o café intacto</p>
            </div>
            <div className="flex gap-3 items-center w-57">
              <div className="h-8 w-8 rounded-2xl bg-yellow p-2">
                <Timer className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base_text">Entrega rápida e rastreada</p>
            </div>
            <div className="flex gap-3 items-center w-73">
              <div className="h-8 w-8 rounded-2xl bg-purple p-2">
                <Coffee className="text-white" size={16} weight="fill" />
              </div>
              <p className="text-base_text">O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <div className="w-99">
          <img src={banner_coffee} alt="Café especial" />
        </div>
      </div>
    </section>
  );
}
