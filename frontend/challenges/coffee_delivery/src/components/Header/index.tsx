import logo from "../../assets/logo.svg";
import * as Select from "@radix-ui/react-select";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <header className="max-w-full">
      <div className="px-40 py-8 flex justify-between items-center">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Coffee Shop Logo" className="w-20 h-10" />
        </div>

        <div className="flex items-center gap-4">
          <Select.Root>
            <Select.Trigger
              className="px-2 py-2 border border-gray-300 rounded-md flex justify-center items-center gap-1 bg-purple_light text-purple text-sm"
              disabled
            >
              <Select.Icon>
                <MapPin weight="fill" size={22} />
              </Select.Icon>
              <Select.Value placeholder="Porto Alegre, RS" />
            </Select.Trigger>
            <Select.Content className="bg-white border border-gray-300 rounded-md shadow-md">
              <Select.Item
                value="option1"
                className="px-4 py-2 hover:bg-gray-100"
              >
                São Paulo, SP
              </Select.Item>
              <Select.Item
                value="option2"
                className="px-4 py-2 hover:bg-gray-100"
              >
                Rio de Janeiro, RJ
              </Select.Item>
            </Select.Content>
          </Select.Root>
          <button className="p-2 bg-yellow_light text-yellow_dark rounded-md hover:border-yellow_dark">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
