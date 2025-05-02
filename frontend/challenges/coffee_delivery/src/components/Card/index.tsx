import coffee from "../../assets/Coffee.png";

export function Card() {
  return (
    <div className="flex w-64 transform flex-col items-center gap-3 justify-self-center rounded-special bg-base-card p-5 shadow-md transition hover:scale-105">
      <img
        src={coffee}
        alt="Café Expresso Gelado"
        className="-mt-10 mb-2 h-28 w-28"
      />

      <div className="flex flex-wrap justify-center gap-1">
        <span className="rounded-full bg-purple px-2 py-1 text-[10px] font-bold uppercase text-white">
          Tradicional
        </span>
        <span className="rounded-full bg-purple px-2 py-1 text-[10px] font-bold uppercase text-white">
          Gelado
        </span>
      </div>

      <h2 className="text-center text-xl font-bold text-base-text">
        Expresso Gelado
      </h2>

      <p className="text-center text-sm leading-tight text-base-subtitle">
        Bebida preparada com café expresso e cubos de gelo
      </p>

      <div className="mt-5 flex w-full items-center justify-between">
        <div className="text-coffee text-2xl font-extrabold">
          <span className="text-sm font-normal">R$</span> 9,90
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

          <button className="rounded-md bg-purple p-2 text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
