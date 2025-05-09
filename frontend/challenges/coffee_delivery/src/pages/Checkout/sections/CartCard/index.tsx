import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { ProductCard } from "./components/ProductCard";
import { useCartContext } from "@/hooks/useCart";
import React from "react";

export function CartCard() {
  const { cart } = useCartContext();

  return (
    <Card className="rounded-md bg-base-card p-4 dark:border dark:border-base-button md:p-10 lg:rounded-[6px_44px]">
      <CardContent className="flex flex-col gap-6 self-stretch p-0">
        {cart.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard product={product} />
            <Divider />
          </React.Fragment>
        ))}

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-right text-sm leading-[130%] text-base-text dark:text-base-label">
              Total de itens
            </span>
            <span className="text-right text-base leading-[130%] text-base-text dark:text-base-label">
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
            <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle dark:text-base-title">
              Total
            </span>
            <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle">
              R$ 12,90
            </span>
          </div>
        </div>
        <Button
          type="submit"
          className="rounded-md bg-brand-yellow px-2 py-3 font-bold text-white hover:bg-brand-yellow-dark dark:hover:brightness-90"
        >
          CONFIRMAR PEDIDO
        </Button>
      </CardContent>
    </Card>
  );
}
