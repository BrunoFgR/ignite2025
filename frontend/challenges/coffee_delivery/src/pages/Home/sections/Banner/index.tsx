import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import banner_coffee from "../../../../assets/banner-coffee.png";

export function Banner() {
  const features = [
    {
      id: 1,
      text: "Compra simples e segura",
      bgColor: "bg-brand-yellow-dark",
      iconSrc: <ShoppingCart weight="fill" className="text-white" />,
    },
    {
      id: 3,
      text: "Embalagem mantém o café intacto",
      bgColor: "bg-base-text",
      iconSrc: <Coffee weight="fill" className="text-white" />,
    },
    {
      id: 2,
      text: "Entrega rápida e rastreada",
      bgColor: "bg-brand-yellow",
      iconSrc: <Package weight="fill" className="text-white" />,
    },
    {
      id: 4,
      text: "O café chega fresquinho até você",
      bgColor: "bg-brand-purple",
      iconSrc: <Timer weight="fill" className="text-white" />,
    },
  ];

  return (
    <section className="relative min-h-[400px] w-full bg-cover py-6 dark:bg-base-background md:h-[544px] md:py-0">
      <div className="container flex h-full flex-col items-center justify-between px-4 md:flex-row md:px-8 lg:px-8">
        <div className="flex w-full flex-col gap-4 text-center md:max-w-[700px] md:text-left">
          <h1 className="font-title-title-XL text-3xl font-extrabold text-base-title dark:text-base-title sm:text-4xl md:text-5xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="font-text-regular-l text-base text-base-subtitle dark:text-base-subtitle sm:text-lg md:text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-4 md:gap-5 lg:mt-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center rounded-full p-2 ${feature.bgColor}`}
                >
                  {feature.iconSrc}
                </div>
                <span className="font-text-regular-m text-[13px] text-base-text dark:text-base-text sm:text-base">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 hidden w-full justify-center md:mt-0 md:block md:w-auto lg:flex">
          <img
            className="h-auto max-h-[360px] w-auto max-w-[80%] object-cover sm:max-w-[350px] md:w-[476px] md:max-w-full"
            alt="Imagem de café"
            src={banner_coffee}
          />
        </div>
      </div>
    </section>
  );
}
