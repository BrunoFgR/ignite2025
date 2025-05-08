import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import illustration from "@/assets/illustration.svg";
import { Card, CardContent } from "@/components/ui/card";

export function Success() {
  return (
    <div className="flex w-full dark:bg-base-background">
      <div className="flex flex-1 flex-col gap-5 px-4 pt-20 md:gap-10 md:px-16 xl:px-60">
        <div className="flex flex-col gap-1 sm:gap-0">
          <h1 className="font-title-title-l text-xl font-extrabold leading-[130%] text-brand-yellow-dark md:text-[length:var(--title-title-l-font-size)]">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-sm leading-[130%] text-base-subtitle dark:text-base-title md:text-xl">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="flex flex-col justify-between gap-8 self-stretch md:flex-row md:gap-0">
          <Card className="w-full rounded-[6px_36px] border border-brand-yellow-dark p-6 dark:bg-base-card md:max-w-md md:p-10">
            <CardContent className="flex flex-col gap-6 p-0 md:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full bg-brand-purple p-2">
                  <MapPin weight="fill" color="white" size={16} />
                </div>
                <p className="text-sm dark:text-base-subtitle md:text-base">
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                  <span className="none sm:block">
                    Farrapos - Porto Alegre, RS
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full bg-brand-yellow p-2">
                  <Timer weight="fill" color="white" size={16} />
                </div>
                <p className="text-sm dark:text-base-subtitle md:text-base">
                  Previsão de entrega
                  <span className="block font-bold dark:text-base-title">20 min - 30 min</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-full bg-brand-yellow-dark p-2">
                  <CurrencyDollar weight="fill" color="white" size={16} />
                </div>
                <p className="text-sm dark:text-base-subtitle md:text-base">
                  Pagamento na entrega{" "}
                  <span className="block font-bold dark:text-base-title">Cartão de crédito</span>
                </p>
              </div>
            </CardContent>
          </Card>
          <img
            src={illustration}
            alt="Success"
            className="hidden h-auto max-w-full md:block md:max-w-xs lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
