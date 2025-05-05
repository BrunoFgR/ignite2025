import { ShoppingCart } from "phosphor-react";
import { Product } from "../../../../../context/ProductContext";
import { Card, CardContent } from "../../../../../components/ui/card";
import { getImage } from "../../../../../utils/getImage";
import { currencyFormatter } from "../../../../../utils/formatter";

export function CoffeeCard({
  title,
  description,
  price,
  image,
  tags,
}: Product) {
  return (
    <Card className="flex w-64 transform flex-col items-center justify-self-center rounded-[6px_36px_6px_36px] bg-base-card p-5 shadow-md transition hover:scale-105">
      <img
        src={getImage(image)}
        alt="image"
        className="-mt-10 mb-2 h-28 w-28"
      />

      <CardContent className="flex flex-1 flex-col items-center justify-center gap-3 p-0">
        <div className="flex flex-wrap justify-center gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-brand-yellow-dark bg-brand-yellow-light rounded-full px-2 py-1 text-[10px] font-bold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-title-title-XL text-center text-xl font-bold leading-[24px] text-base-subtitle">
          {title}
        </h2>

        <p className="text-center text-sm leading-[24px] text-base-label">
          {description}
        </p>

        <div className="mt-auto flex w-full items-center justify-between">
          <div className="font-title-title-XL text-2xl font-extrabold text-base-text">
            <span className="mr-1 text-sm font-normal text-base-text">R$</span>
            {currencyFormatter(price)}
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="flex items-center rounded-md bg-base-button px-2 py-1">
              <button className="text-brand-purple flex h-5 w-5 items-center justify-center">
                -
              </button>
              <span className="w-5 text-center text-base-text">1</span>
              <button className="text-brand-purple flex h-5 w-5 items-center justify-center">
                +
              </button>
            </div>

            <button className="bg-brand-purple-dark rounded-md p-2 text-white">
              <ShoppingCart weight="fill" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
