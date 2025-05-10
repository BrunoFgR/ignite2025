import { Card, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/ui/form";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "../..";
import { RadioGroupItem, Root } from "@radix-ui/react-radio-group";
import { JSX, useCallback, useEffect, useState } from "react";
import { mainUrl } from "@/lib/axios";
import { Skeleton } from "@/components/ui/skeleton";

type Method = "credit" | "debit" | "cash";

interface PaymentMethodsRequest {
  id: Method;
  title: string;
  description: string;
}

type PaymentMethods = PaymentMethodsRequest & {
  icon: JSX.Element;
};

export function PaymentCard() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethods[]>([]);

  const getIcon = (type: Method) => {
    return {
      credit: <CreditCard size={16} className="text-brand-purple" />,
      debit: <Bank size={16} className="text-brand-purple" />,
      cash: <Money size={16} className="text-brand-purple" />,
    }[type];
  };

  const { control, setValue } = useFormContext<CheckoutFormData>();

  const getPaymentMethods = useCallback(async () => {
    try {
      const { data } = await mainUrl<PaymentMethods[]>("/payments");
      setValue("paymentMethod", data[0].id);
      setPaymentMethods(
        data.map((method) => ({ ...method, icon: getIcon(method.id) })),
      );
    } catch (error) {
      console.error("Error fetching payment methods:", error);
    }
  }, [setValue]);

  useEffect(() => {
    getPaymentMethods();
  }, [getPaymentMethods]);

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
                {!paymentMethods.length &&
                  [1, 2, 3].map((item) => (
                    <Skeleton key={item} className="h-[50px] w-full" />
                  ))}

                {paymentMethods.map((method) => (
                  <RadioGroupItem
                    value={method.id}
                    title={method.description}
                    key={method.id}
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-base-button p-4 text-base-text transition-colors hover:bg-base-hover hover:text-base-subtitle data-[state=checked]:border data-[state=checked]:border-brand-purple data-[state=checked]:bg-brand-purple-light data-[state=checked]:text-base-text dark:hover:bg-base-hover dark:hover:text-base-title dark:data-[state=checked]:bg-brand-purple-light dark:data-[state=checked]:text-base-title sm:flex-1"
                  >
                    {method.icon}
                    <div className="mt-[-0.50px] font-text-regular-s text-xs font-[number:var(--components-button-s-font-weight)] leading-[var(--components-button-s-line-height)] tracking-[var(--components-button-s-letter-spacing)] text-base-text dark:text-base-subtitle">
                      {method.title.toUpperCase()}
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
