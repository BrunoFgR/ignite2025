import { Card, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/ui/form";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../..";
import { RadioGroupItem, Root } from "@radix-ui/react-radio-group";

export function PaymentCard() {
  const { control } = useFormContext<CheckoutFormData>();

  const paymentMethods = [
    {
      id: "credit",
      label: "CARTÃO DE CRÉDITO",
      icon: <Money size={16} className="text-brand-purple" />,
    },
    {
      id: "debit",
      label: "CARTÃO DE DÉBITO",
      icon: <Bank size={16} className="text-brand-purple" />,
    },
    {
      id: "cash",
      label: "DINHEIRO",
      icon: <CreditCard size={16} className="text-brand-purple" />,
    },
  ];

  return (
    <Card className="w-full rounded-md bg-base-card dark:border dark:border-base-button">
      <CardContent className="flex flex-col gap-8 p-4 md:p-10">
        <div className="flex w-full items-start gap-2">
          <CurrencyDollar size={22} className="text-brand-purple" />

          <div className="flex flex-1 flex-col items-start gap-0.5">
            <div className="mt-[-1.00px] w-full font-text-regular-m text-base leading-[130%] text-base-subtitle dark:text-base-title">
              Pagamento
            </div>

            <div className="w-full font-text-regular-s text-sm leading-[130%] text-base-text dark:text-base-subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <FormField
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <Root
                onChange={field.onChange}
                defaultValue={field.value}
                className="flex w-full flex-col items-center justify-center gap-3 xl:flex-row"
              >
                {paymentMethods.map((method) => (
                  <RadioGroupItem
                    value={method.id}
                    key={method.id}
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-base-button p-4 text-base-text transition-colors hover:bg-base-hover hover:text-base-subtitle data-[state=checked]:border data-[state=checked]:border-brand-purple data-[state=checked]:bg-brand-purple-light data-[state=checked]:text-base-text dark:hover:bg-base-hover dark:hover:text-base-title dark:data-[state=checked]:bg-brand-purple-light dark:data-[state=checked]:text-base-title sm:flex-1"
                  >
                    {method.icon}
                    <div className="mt-[-0.50px] font-text-regular-s text-xs font-[number:var(--components-button-s-font-weight)] leading-[var(--components-button-s-line-height)] tracking-[var(--components-button-s-letter-spacing)] text-base-text dark:text-base-subtitle">
                      {method.label}
                    </div>
                  </RadioGroupItem>
                ))}
              </Root>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
