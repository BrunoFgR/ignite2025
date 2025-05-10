import { Button } from "@/components/ui/button";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router";

export function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-base-button">
        <ShoppingCart size={40} weight="fill" className="text-base-label" />
      </div>

      <div className="text-center">
        <h2 className="font-title-title-m mb-2 text-xl font-bold text-base-subtitle dark:text-base-title">
          Seu carrinho está vazio
        </h2>
        <p className="text-base-text dark:text-base-subtitle">
          Adicione alguns itens para fazer seu pedido
        </p>
      </div>

      <Button
        onClick={() => navigate("/")}
        title="Continuar comprando"
        className="rounded-md bg-brand-yellow px-6 py-3 font-bold text-white hover:bg-brand-yellow-dark dark:hover:brightness-90"
      >
        CONTINUAR COMPRANDO
      </Button>
    </div>
  );
}
