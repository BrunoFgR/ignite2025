import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

export function PaymentCard() {
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
    <Card className="w-full rounded-md bg-base-card">
      <CardContent className="flex flex-col gap-8 p-4 md:p-10">
        <div className="flex w-full items-start gap-2">
          <CurrencyDollar size={22} className="text-brand-purple" />

          <div className="flex flex-1 flex-col items-start gap-0.5">
            <div className="mt-[-1.00px] w-full font-text-regular-m text-base leading-[130%] text-base-subtitle">
              Pagamento
            </div>

            <div className="w-full font-text-regular-s text-sm leading-[130%] text-base-text">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          {paymentMethods.map((method) => (
            <Button
              key={method.id}
              type="button"
              className="flex w-full items-center gap-3 rounded-md bg-base-button p-4 text-base-title transition-colors hover:bg-base-hover hover:text-base-subtitle sm:flex-1"
            >
              {method.icon}
              <div className="mt-[-0.50px] font-text-regular-s text-xs font-[number:var(--components-button-s-font-weight)] leading-[var(--components-button-s-line-height)] tracking-[var(--components-button-s-letter-spacing)] text-base-text">
                {method.label}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
