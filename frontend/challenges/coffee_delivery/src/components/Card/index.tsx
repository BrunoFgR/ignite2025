import { ShoppingCart } from "phosphor-react";
import { Product } from "../../context/ProductContext";
import { getImage } from "../../utils/getImage";
import { currencyFormatter } from "../../utils/formatter";

export function Card({ title, description, price, image, tags }: Product) {
  return (
    <div className="flex w-64 transform flex-col items-center gap-3 justify-self-center rounded-special bg-base-card p-5 shadow-md transition hover:scale-105">
      <img
        src={getImage(image)}
        alt="Café Expresso Gelado"
        className="-mt-10 mb-2 h-28 w-28"
      />

      <div className="flex flex-wrap justify-center gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-yellow-light px-2 py-1 text-[10px] font-bold uppercase text-yellow-dark"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="text-center font-montserrat text-title-sm font-bold text-base-subtitle">
        {title}
      </h2>

      <p className="text-center text-text-sm text-base-label">{description}</p>

      <div className="mt-5 flex w-full items-center justify-between">
        <div className="font-montserrat text-title-md font-extrabold text-base-text">
          <span className="mr-1 text-text-sm font-normal text-base-text">
            R$
          </span>
          {currencyFormatter(price)}
        </div>

        <div className="flex gap-2">
          <div className="flex items-center rounded-md bg-base-button px-2 py-1">
            <button className="flex h-5 w-5 items-center justify-center text-purple">
              -
            </button>
            <span className="w-5 text-center text-base-text">1</span>
            <button className="flex h-5 w-5 items-center justify-center text-purple">
              +
            </button>
          </div>

          <button className="rounded-md bg-purple-dark p-2 text-white">
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </div>
  );
}
