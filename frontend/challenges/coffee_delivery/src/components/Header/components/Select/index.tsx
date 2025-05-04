import * as SelectRadix from "@radix-ui/react-select";
import { MapPin } from "phosphor-react";

export function Select() {
  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger
        className="flex items-center justify-center gap-1 rounded-md border border-purple-dark bg-purple-light px-1 py-1 text-xs text-purple md:px-2 md:py-2 md:text-sm"
        aria-label="city"
      >
        <SelectRadix.Icon>
          <MapPin weight="fill" size={16} className="md:size-[22px]" />
        </SelectRadix.Icon>
        <SelectRadix.Value
          placeholder="Porto Alegre, RS"
          className="hidden sm:inline"
        />
        <SelectRadix.Value placeholder="POA" className="inline sm:hidden" />
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content
          className="z-20 rounded-md border border-purple bg-white shadow-md"
          position="popper"
          sideOffset={5}
          align="center"
        >
          <SelectRadix.ScrollUpButton />
          <SelectRadix.Viewport>
            <SelectRadix.Item
              value="option1"
              className="px-4 py-2 text-xs hover:bg-purple-light hover:text-purple md:text-sm"
            >
              <SelectRadix.ItemText>São Paulo, SP</SelectRadix.ItemText>
              <SelectRadix.ItemIndicator />
            </SelectRadix.Item>
            <SelectRadix.Item
              value="option2"
              className="px-4 py-2 text-xs hover:bg-purple-light hover:text-purple md:text-sm"
            >
              <SelectRadix.ItemText>Rio de Janeiro, RJ</SelectRadix.ItemText>
              <SelectRadix.ItemIndicator />
            </SelectRadix.Item>
          </SelectRadix.Viewport>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
}
