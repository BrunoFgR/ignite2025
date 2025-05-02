import logo from "../../assets/logo.svg";
import * as Select from "@radix-ui/react-select";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <header className="max-w-full">
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 md:px-16 md:py-8 lg:px-40">
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Coffee Shop Logo"
            className="h-8 w-16 md:h-10 md:w-20"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Select.Root>
            <Select.Trigger
              className="bg-purple-light flex items-center justify-center gap-1 rounded-md border border-gray-300 px-1 py-1 text-xs text-purple md:px-2 md:py-2 md:text-sm"
              disabled
            >
              <Select.Icon>
                <MapPin weight="fill" size={16} className="md:size-[22px]" />
              </Select.Icon>
              <Select.Value
                placeholder="Porto Alegre, RS"
                className="hidden sm:inline"
              />
              <Select.Value placeholder="POA" className="inline sm:hidden" />
            </Select.Trigger>
            <Select.Content className="rounded-md border border-gray-300 bg-white shadow-md">
              <Select.Item
                value="option1"
                className="px-4 py-2 text-xs hover:bg-gray-100 md:text-sm"
              >
                São Paulo, SP
              </Select.Item>
              <Select.Item
                value="option2"
                className="px-4 py-2 text-xs hover:bg-gray-100 md:text-sm"
              >
                Rio de Janeiro, RJ
              </Select.Item>
            </Select.Content>
          </Select.Root>
          <div className="relative">
            <button className="text-yellow-dark bg-yellow-light hover:border-yellow-dark rounded-md p-1 md:p-2">
              <ShoppingCart
                weight="fill"
                size={16}
                className="md:size-[22px]"
              />
            </button>
            <span className="bg-yellow-dark absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-tag font-bold text-white md:h-5 md:w-5 md:text-xs">
              3
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
