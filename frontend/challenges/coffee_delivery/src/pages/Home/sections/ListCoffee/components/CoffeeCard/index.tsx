import { ShoppingCart } from "phosphor-react";
import { Product } from "@/context/ProductContext";
import { Card, CardContent } from "@/components/ui/card";
import { getImage } from "@/utils/getImage";
import { currencyFormatter } from "@/utils/formatter";
import { QuantitySelector } from "@/components/QuantitySelector";
import { useCallback, useState } from "react";
import { useToast } from "@/hooks/useToast";

import { Button } from "@/components/ui/button";
import { useCartContext } from "@/hooks/useCart";

export function CoffeeCard({
  id,
  title,
  description,
  price,
  image,
  tags,
  amount,
}: Product) {
  const { toast } = useToast();
  const { addToCart, cart, removeFromCart } = useCartContext(
    ({ addToCart, cart, removeFromCart }) => ({
      addToCart,
      cart,
      removeFromCart,
    }),
  );
  const [quantity, setQuantity] = useState(() => {
    const itemInCart = cart.find((item) => item.id === id);
    return itemInCart ? itemInCart.quantity : 0;
  });

  const handleIncrease = useCallback(() => {
    if (quantity < amount) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      toast({
        variant: "destructive",
        title: "Max quantity reached",
        description: "You cannot add more than the available amount",
      });
    }
  }, [amount, quantity, toast]);

  const handleDecrease = useCallback(() => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  }, [quantity]);

  const findItemInCart = cart.find((item) => item.id === id);

  const handleAddToCart = useCallback(() => {
    if (quantity === 0) {
      removeFromCart(id);
      toast({
        variant: "success",
        title: "Item removed from cart",
        description: `${title} removed from cart`,
      });
    }

    if (
      findItemInCart &&
      findItemInCart.quantity !== quantity &&
      quantity > 0
    ) {
      addToCart({ id, title, price, quantity, stock: amount, image });
      toast({
        variant: "success",
        title: "Item updated",
        description: `${quantity} ${title} added to cart`,
      });
    }

    if (!findItemInCart && quantity > 0) {
      addToCart({ id, title, price, quantity, stock: amount, image });
      toast({
        variant: "success",
        title: "Item added to cart",
        description: `${quantity} ${title} added to cart`,
      });
    }
  }, [
    quantity,
    findItemInCart,
    removeFromCart,
    id,
    toast,
    title,
    addToCart,
    price,
    amount,
    image,
  ]);

  const isDisabled =
    (!findItemInCart && quantity === 0) ||
    findItemInCart?.quantity === quantity;

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
              className="rounded-full bg-brand-yellow-light px-2 py-1 text-[10px] font-bold uppercase text-brand-yellow-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-center font-title-title-XL text-xl font-bold leading-[24px] text-base-subtitle">
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
            <QuantitySelector
              value={quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />

            <Button
              className="rounded-md bg-brand-purple-dark px-[0.625rem] py-2 text-white hover:bg-brand-purple"
              disabled={isDisabled}
              onClick={handleAddToCart}
            >
              <ShoppingCart weight="fill" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
