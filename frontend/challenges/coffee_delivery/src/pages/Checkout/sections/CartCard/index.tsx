import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { ProductCard } from "./components/ProductCard";
import { useCartContext } from "@/hooks/useCart";

export function CartCard() {
  const { cart } = useCartContext((cartContext) => cartContext);

  return (
    <Card className="rounded-md bg-base-card p-4 md:p-10 lg:rounded-[6px_44px]">
      <CardContent className="flex flex-col gap-6 self-stretch p-0">
        {cart.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Divider />
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-right text-sm leading-[130%] text-base-text">
              Total de itens
            </span>
            <span className="text-right text-base leading-[130%] text-base-text">
              R$ 9,90
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-right text-sm leading-[130%] text-base-text">
              Entrega
            </span>
            <span className="text-right text-base leading-[130%] text-base-text">
              R$ 3,00
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle">
              Total
            </span>
            <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle">
              R$ 12,90
            </span>
          </div>
        </div>
        <Button
          type="submit"
          className="rounded-md bg-brand-yellow px-2 py-3 font-bold text-base-text text-white hover:bg-brand-yellow-dark"
        >
          CONFIRMAR PEDIDO
        </Button>
      </CardContent>
    </Card>
  );
}
