import { useCartContext } from "@/hooks/useCart";
import { currencyFormatter } from "@/utils/formatter";
import { useMemo } from "react";

export function CalculateCart() {
  const { cart } = useCartContext();

  const calculateCart = useMemo(() => {
    return cart.reduce(
      (acc, cur) => {
        const { price, quantity } = cur;
        const itemTotal = price * quantity;
        const newSumTotal = acc.sumTotal + itemTotal;
        const newTotal = newSumTotal + acc.deliveryFee;
        return {
          sumTotal: newSumTotal,
          deliveryFee: acc.deliveryFee,
          total: newTotal,
        };
      },
      { sumTotal: 0, deliveryFee: 3.5, total: 0 },
    );
  }, [cart]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-right text-sm leading-[130%] text-base-text dark:text-base-label">
          Total de itens
        </span>
        <span className="text-right text-base leading-[130%] text-base-text dark:text-base-label">
          {currencyFormatter(calculateCart.sumTotal)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-right text-sm leading-[130%] text-base-text">
          Entrega
        </span>
        <span className="text-right text-base leading-[130%] text-base-text">
          {currencyFormatter(calculateCart.deliveryFee)}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle dark:text-base-title">
          Total
        </span>
        <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle">
          {currencyFormatter(calculateCart.total)}
        </span>
      </div>
    </div>
  );
}
