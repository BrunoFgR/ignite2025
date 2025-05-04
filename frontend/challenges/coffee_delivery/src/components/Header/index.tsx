import logo from "../../assets/logo.svg";
import { ShoppingCart } from "phosphor-react";
import { Badge } from "./components/Badge";
import { Select } from "./components/Select";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();

  function handleNavigateToCheckout() {
    navigate("/checkout");
  }

  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-base-background px-4 py-4 sm:px-6 md:px-8 md:py-6 lg:px-16 lg:py-8 xl:px-40">
      <img
        src={logo}
        className="h-8 w-[70px] md:h-10 md:w-[85px]"
        alt="Coffee Delivery Logo"
      />

      <div className="flex items-center gap-2 md:gap-3">
        <Select />
        <Badge>
          <button
            className="bg-brand-yellow-light text-brand-yellow hover:border-brand-yellow-dark rounded-md p-1 md:p-2"
            onClick={handleNavigateToCheckout}
          >
            <ShoppingCart weight="fill" className="size-[22px]" />
          </button>
        </Badge>
      </div>
    </header>
  );
}
