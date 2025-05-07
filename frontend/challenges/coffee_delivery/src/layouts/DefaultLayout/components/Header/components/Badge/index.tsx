import { useCartContext } from "@/hooks/useCart";

export function Badge({ children }: { children: React.ReactNode }) {
  const { cart } = useCartContext(({ cart }) => ({ cart }));

  return (
    <div className="relative">
      {children}
      {!!cart.length && (
        <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-yellow-dark text-[0.625rem] font-bold text-white md:h-5 md:w-5 md:text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
}
