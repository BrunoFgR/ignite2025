import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash } from "phosphor-react";
import americano from "@/assets/americano.png";
import { Divider } from "@/components/ui/divider";
import { QuantitySelector } from "@/components/QuantitySelector";

export function CartCard() {
  return (
    <Card className="rounded-md bg-base-card p-4 md:p-10 lg:rounded-[6px_44px]">
      <CardContent className="flex flex-col gap-6 self-stretch p-0">
        <div className="flex flex-wrap justify-between px-1 py-2 sm:flex-nowrap">
          <div className="flex w-full items-center justify-between sm:w-auto sm:gap-5">
            <img src={americano} alt="Coffee" className="h-16 w-16" />
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="font-text-regular-m text-base leading-[130%] text-base-subtitle">
                Americano
              </span>
              <div className="flex flex-1 justify-center gap-2 self-stretch">
                <QuantitySelector />
                <Button className="rounded-md bg-base-button font-title-title-s text-xs uppercase leading-[160%] text-base-text hover:bg-base-hover hover:text-base-subtitle">
                  <Trash className="h-4 w-4 text-brand-purple" />
                  <span className="hidden sm:inline">remover</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-2 w-full text-right text-base font-bold leading-[130%] text-base-text sm:mt-0 sm:w-auto">
            <strong>R$ 9,90</strong>
          </div>
        </div>
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
