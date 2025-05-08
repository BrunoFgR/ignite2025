import logo from "../../../../assets/logo.svg";
import { ShoppingCart } from "phosphor-react";
import { Badge } from "./components/Badge";
import { Select } from "./components/Select";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeTroggle";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-base-background px-4 py-4 shadow-sm dark:border-b dark:border-base-button sm:px-6 md:px-8 md:py-6 lg:px-16 lg:py-8 xl:px-40">
      <Link to="/">
        <img
          src={logo}
          className="h-8 w-[70px] md:h-10 md:w-[85px]"
          alt="Coffee Delivery Logo"
        />
      </Link>

      <div className="flex items-center gap-2 md:gap-3">
        <ModeToggle />
        <Select />
        <Link to="/checkout">
          <Badge>
            <Button className="rounded-md bg-brand-yellow-light px-2 text-brand-yellow hover:border-brand-yellow-dark hover:bg-brand-yellow-light md:px-[0.625rem] md:py-2">
              <ShoppingCart weight="fill" className="size-[22px]" />
            </Button>
          </Badge>
        </Link>
      </div>
    </header>
  );
}
