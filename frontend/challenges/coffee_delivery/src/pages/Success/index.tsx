import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import illustration from "@/assets/illustration.svg";
import { Card, CardContent } from "@/components/ui/card";
import { CartItem } from "@/reducers/cart/reducer";
import { useCallback, useEffect, useState } from "react";
import { mainUrl } from "@/lib/axios";
import { useParams } from "react-router";

type PaymentMethod = "credit" | "debit" | "cash";

interface Address {
  id: number;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  uf: string;
}

interface Payment {
  id: PaymentMethod;
  title: string;
  description: string;
}

interface Order {
  id: number;
  address: Address;
  paymentMethod: Payment;
  item: CartItem[];
}

export function Success() {
  const [order, setOrder] = useState<Order | null>(null);
  const params = useParams();

  const getOrder = useCallback(async () => {
    try {
      const response = await mainUrl.get<Order>(`/orders/${params.id}`);
      setOrder(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [params.id]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  return (
    <div className="flex w-full dark:bg-base-background">
      {order ? (
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
                    Entrega em{" "}
                    <strong>{`${order.address.street}, ${order.address.number}`}</strong>{" "}
                    <span className="none sm:block">
                      {`${order.address.neighborhood} - ${order.address.city}, ${order.address.uf}`}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-full bg-brand-yellow p-2">
                    <Timer weight="fill" color="white" size={16} />
                  </div>
                  <p className="text-sm dark:text-base-subtitle md:text-base">
                    Previsão de entrega
                    <span className="block font-bold dark:text-base-title">
                      20 min - 30 min
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center rounded-full bg-brand-yellow-dark p-2">
                    <CurrencyDollar weight="fill" color="white" size={16} />
                  </div>
                  <p className="text-sm dark:text-base-subtitle md:text-base">
                    Pagamento na entrega{" "}
                    <span className="block font-bold dark:text-base-title">
                      {order.paymentMethod.title}
                    </span>
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
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-5 px-4 py-20">
          <h2 className="text-2xl font-bold text-brand-yellow-dark">
            Pedido não encontrado
          </h2>
          <p className="text-center text-base-subtitle dark:text-base-title">
            Não foi possível encontrar os detalhes do pedido solicitado.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <p className="text-center text-sm text-base-text">
              Verifique se o número do pedido está correto ou entre em contato
              com nosso suporte.
            </p>
            <a
              href="/"
              className="mt-2 rounded-md bg-brand-purple px-4 py-2 text-center font-bold text-white transition-colors hover:bg-brand-purple-dark"
            >
              Voltar para a página inicial
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
