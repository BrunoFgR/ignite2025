import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPinLine } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../..";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMask } from "@react-input/mask";

export function AddressCard() {
  const { control } = useFormContext<CheckoutFormData>();
  const cepMaskOption = {
    mask: "_____-___",
    replacement: { _: /\d/ },
  };
  const cepRef = useMask(cepMaskOption);

  return (
    <Card className="w-full rounded-md bg-base-card">
      <CardContent className="flex flex-col gap-8 p-4 md:p-10">
        <div className="flex w-full items-start gap-2">
          <MapPinLine className="h-[22px] w-[22px] text-brand-yellow-dark" />

          <div className="flex flex-1 flex-col items-start gap-0.5">
            <div className="mt-[-1.00px] w-full font-text-regular-m text-base leading-[130%] text-base-subtitle">
              Endereço de Entrega
            </div>

            <div className="w-full font-text-regular-s text-sm leading-[130%] text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          {/* First row - CEP */}

          <FormField
            control={control}
            name="address.cep"
            render={({ field }) => (
              <FormItem className="relative flex w-full flex-col">
                <FormControl className="">
                  <Input
                    className="h-auto rounded border border-solid border-base-button bg-base-input p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark sm:w-[200px]"
                    placeholder="CEP"
                    {...field}
                    ref={cepRef}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Second row - Street */}

          <FormField
            control={control}
            name="address.street"
            render={({ field }) => (
              <FormItem className="relative flex w-full flex-col">
                <FormControl>
                  <Input
                    type="text"
                    className="h-auto rounded border border-solid border-base-button bg-base-input p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                    placeholder="Rua"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Third row - Number and Complement */}
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row">
            <FormField
              control={control}
              name="address.number"
              render={({ field }) => (
                <FormItem className="relative flex w-full flex-col sm:w-auto">
                  <FormControl>
                    <Input
                      className="h-auto rounded border border-solid border-base-button bg-base-input p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark sm:w-[200px]"
                      placeholder="Número"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="address.complement"
              render={({ field }) => (
                <FormItem className="relative flex w-full flex-col">
                  <div className="flex flex-1 items-start rounded border border-solid border-base-button bg-base-input">
                    <FormControl>
                      <Input
                        className="h-auto border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                        placeholder="Complemento"
                        {...field}
                      />
                    </FormControl>
                    <div className="mb-2 whitespace-nowrap rounded pl-1 pr-2 pt-[14px] text-xs font-normal italic leading-[15.6px] tracking-[0] text-base-label">
                      Opcional
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Fourth row - Neighborhood, City and State */}
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row">
            <FormField
              control={control}
              name="address.neighborhood"
              render={({ field }) => (
                <FormItem className="relative flex w-full flex-col sm:w-[200px]">
                  <FormControl>
                    <Input
                      className="h-auto rounded border border-solid border-base-button bg-base-input p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="Bairro"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="address.city"
              render={({ field }) => (
                <FormItem className="relative flex w-full flex-col">
                  <FormControl>
                    <Input
                      className="h-auto rounded border border-solid border-base-button bg-base-input p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="Cidade"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="address.uf"
              render={({ field }) => (
                <FormItem className="relative flex w-full flex-col sm:w-[60px]">
                  <FormControl>
                    <Input
                      className="h-auto rounded border border-solid border-base-button bg-base-input p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="UF"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
