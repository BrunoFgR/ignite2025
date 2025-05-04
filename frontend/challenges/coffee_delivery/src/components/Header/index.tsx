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
    <header className="fixed left-0 right-0 top-0 z-10 max-w-full bg-base-background">
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-40">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Coffee Shop Logo"
            className="h-8 w-16 md:h-10 md:w-20"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Select />
          <Badge>
            <button
              className="rounded-md bg-yellow-light p-1 text-yellow-dark hover:border-yellow-dark md:p-2"
              onClick={handleNavigateToCheckout}
            >
              <ShoppingCart weight="fill" className="size-4 md:size-[22px]" />
            </button>
          </Badge>
        </div>
      </div>
    </header>
  );
}
