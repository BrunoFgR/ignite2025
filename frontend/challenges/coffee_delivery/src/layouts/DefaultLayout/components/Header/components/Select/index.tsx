import { useCallback, useEffect, useState } from "react";
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
import { mainUrl } from "@/lib/axios";

interface AdressResponse {
  id: number;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export function Select() {
  const [addresses, setAddresses] = useState<AdressResponse[]>([]);

  const getAddresses = useCallback(async () => {
    try {
      const { data } = await mainUrl.get<AdressResponse[]>("/address");
      setAddresses(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  const selectOptions = addresses.map((address) => ({
    value: address.id.toString(),
    label: `${address.street}, ${address.number}`,
  }));

  return (
    <Root>
      <SelectTrigger
        className="flex items-center gap-1 rounded-md bg-brand-purple-light px-2 py-2 text-sm text-brand-purple dark:bg-brand-purple-light dark:text-white md:px-2 md:py-2"
        aria-label="city"
        title="Seus endereços"
      >
        <SelectIcon className="inline">
          <MapPin weight="fill" size={16} className="md:size-[22px]" />
        </SelectIcon>
        <div className="w-[5.5rem] truncate sm:w-36">
          <SelectValue placeholder="Meus endereços" className="inline" />
        </div>
      </SelectTrigger>
      <SelectContent
        className="border-purple z-20 rounded-md border bg-white shadow-md dark:border-base-button dark:bg-base-card"
        position="popper"
        sideOffset={5}
        align="center"
      >
        <SelectScrollUpButton />
        <SelectViewport className="p-1">
          {selectOptions.map((city) => (
            <SelectItem
              key={city.value}
              value={city.value}
              className="px-4 py-2 text-xs hover:bg-brand-purple-light hover:text-brand-purple dark:text-base-subtitle dark:hover:bg-brand-purple-light dark:hover:text-white md:text-sm"
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
