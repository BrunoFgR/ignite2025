import { QuantitySelector } from "@/components/QuantitySelector";
import { Trash } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/reducers/cart/reducer";
import { currencyFormatter } from "@/utils/formatter";
import { useCartContext } from "@/hooks/useCart";
import { useCallback } from "react";
import { getImage } from "@/utils/getImage";
import { useToast } from "@/hooks/useToast";

interface ProductCardProps {
  product: CartItem;
}

export function ProductCard({
  product: { id, quantity, title, price, stock, image },
}: ProductCardProps) {
  const { updateCart, removeFromCart } = useCartContext();
  const { toast } = useToast();

  const handleIncrease = useCallback(() => {
    if (quantity == stock) {
      toast({
        title: "Quantidade máxima atingida",
        description: "Você não pode adicionar mais itens ao carrinho.",
        variant: "destructive",
      });
    }

    if (quantity < stock) {
      updateCart(id, quantity + 1);
    }
  }, [id, quantity, stock, toast, updateCart]);

  const handleDecrease = useCallback(() => {
    if (quantity > 1) {
      updateCart(id, quantity - 1);
    }
  }, [id, quantity, updateCart]);

  const handleRemoveFromCart = useCallback(() => {
    removeFromCart(id);
    toast({
      title: "Item removido do carrinho",
      description: "O item foi removido com sucesso.",
      variant: "success",
    });
  }, [id, removeFromCart, toast]);

  return (
    <div className="flex flex-wrap justify-between px-1 py-2 sm:flex-nowrap">
      <div className="flex w-full items-center justify-between sm:w-auto sm:gap-5">
        <img
          src={getImage(image)}
          alt={title}
          className="h-20 w-20 sm:h-16 sm:w-16"
        />
        <div className="flex flex-col items-start justify-center gap-2">
          <span className="font-text-regular-m text-base leading-[130%] text-base-subtitle dark:text-base-subtitle">
            {title}
          </span>
          <div className="flex flex-1 justify-center gap-2 self-stretch">
            <QuantitySelector
              value={quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
            <Button
              title="Remover"
              className="rounded-md bg-base-button font-title-title-s text-xs uppercase leading-[160%] text-base-text hover:bg-base-hover hover:text-base-subtitle dark:hover:bg-base-hover dark:hover:text-base-title"
              type="button"
              onClick={handleRemoveFromCart}
            >
              <Trash className="h-4 w-4 text-brand-purple" />
              <span className="hidden sm:inline">remover</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-2 w-full text-right text-base font-bold leading-[130%] text-base-text dark:text-base-title sm:mt-0 sm:w-auto">
        <strong>{currencyFormatter(price)}</strong>
      </div>
    </div>
  );
}
