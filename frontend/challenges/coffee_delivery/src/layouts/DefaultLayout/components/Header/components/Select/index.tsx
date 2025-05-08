import { useState } from "react";
import {
  Root,
  SelectTrigger,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectIcon,
  SelectValue,
  SelectScrollUpButton,
} from "@radix-ui/react-select";
import { MapPin } from "phosphor-react";

export function Select() {
  const [selectedCity, setSelectedCity] = useState("Porto Alegre, RS");

  const cities = [
    { value: "option1", label: "São Paulo, SP" },
    { value: "option2", label: "Rio de Janeiro, RJ" },
    { value: "option3", label: "Porto Alegre, RS" },
  ];

  const handleValueChange = (value: string) => {
    const selectedOption = cities.find((city) => city.value === value);
    if (selectedOption) {
      setSelectedCity(selectedOption.label);
    }
  };

  return (
    <Root
      value={cities.find((city) => city.label === selectedCity)?.value}
      onValueChange={handleValueChange}
    >
      <SelectTrigger
        className="flex items-center justify-center gap-1 rounded-md bg-brand-purple-light px-2 py-2 text-sm text-brand-purple md:px-2 md:py-2"
        aria-label="city"
      >
        <SelectIcon>
          <MapPin weight="fill" size={16} className="md:size-[22px]" />
        </SelectIcon>
        <SelectValue
          placeholder={selectedCity}
          className="hidden whitespace-nowrap sm:inline"
        />
        <SelectValue placeholder="" className="inline sm:hidden" />
      </SelectTrigger>
      <SelectContent
        className="border-purple z-20 rounded-md border bg-white shadow-md"
        position="popper"
        sideOffset={5}
        align="center"
      >
        <SelectScrollUpButton />
        <SelectViewport>
          {cities.map((city) => (
            <SelectItem
              key={city.value}
              value={city.value}
              className="px-4 py-2 text-xs hover:bg-brand-purple-light hover:text-brand-purple md:text-sm"
            >
              <SelectItemText>{city.label}</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          ))}
        </SelectViewport>
      </SelectContent>
    </Root>
  );
}
