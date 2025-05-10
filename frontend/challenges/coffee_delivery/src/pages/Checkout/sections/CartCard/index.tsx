import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { useCartContext } from "@/hooks/useCart";
import { ProductCard } from "./components/ProductCard";
import { CalculateCart } from "./components/CalculateCart";
import { EmptyCart } from "./components/EmptyCart";

export function CartCard() {
  const { cart } = useCartContext();

  return (
    <Card className="rounded-md bg-base-card p-4 dark:border dark:border-base-button md:p-10 lg:rounded-[6px_44px]">
      <CardContent className="flex flex-col gap-6 self-stretch p-0">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {cart.map((product) => (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
                <Divider />
              </React.Fragment>
            ))}

            <CalculateCart />
            <Button
              type="submit"
              title="Confirmar pedido"
              className="rounded-md bg-brand-yellow px-2 py-3 font-bold text-white hover:bg-brand-yellow-dark dark:hover:brightness-90"
            >
              CONFIRMAR PEDIDO
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
