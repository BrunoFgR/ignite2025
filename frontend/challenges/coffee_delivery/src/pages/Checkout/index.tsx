import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Bank,
  CreditCard,
  Money,
  CurrencyDollar,
  MapPinLine,
  Trash,
} from "phosphor-react";
import americano from "@/assets/americano.png";
import { Divider } from "@/components/ui/divider";

export function Checkout() {
  // Form field data for mapping
  // const addressFields = [
  //   { id: "cep", label: "CEP", width: "w-[200px]" },
  //   { id: "street", label: "Rua", width: "w-full" },
  //   { id: "number", label: "Número", width: "w-[200px]" },
  //   { id: "complement", label: "Complemento", width: "flex-1", optional: true },
  //   { id: "neighborhood", label: "Bairro", width: "w-[200px]" },
  //   { id: "city", label: "Cidade", width: "flex-1" },
  //   { id: "state", label: "UF", width: "w-[60px]" },
  // ];

  // Payment method options
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
    <div className="flex max-w-full flex-col px-4 lg:px-8 xl:px-40">
      <div className="mb-12 flex flex-col justify-start gap-8 lg:mb-0 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-3">
          <h2 className="font-title-title-XL text-lg font-bold leading-[130%] text-base-subtitle">
            Complete seu pedido
          </h2>
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
                <div className="relative flex w-full items-center gap-1 rounded border border-solid border-base-button bg-base-input sm:w-[200px]">
                  <Input
                    className="h-auto border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                    placeholder="CEP"
                  />
                </div>

                {/* Second row - Street */}
                <div className="relative flex w-full items-center gap-1 rounded border border-solid border-base-button bg-base-input">
                  <Input
                    type="text"
                    className="h-auto border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                    placeholder="Rua"
                  />
                </div>

                {/* Third row - Number and Complement */}
                <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <div className="relative flex w-full items-center gap-1 rounded border border-solid border-base-button bg-base-input sm:w-[200px]">
                    <Input
                      className="h-auto border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="Número"
                    />
                  </div>

                  <div className="relative flex w-full flex-1 items-center gap-1 rounded border border-solid border-base-button bg-base-input">
                    <Input
                      className="h-auto rounded-ee border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="Complemento"
                    />
                    <div className="w-fit whitespace-nowrap pr-3 font-['Roboto',Helvetica] text-xs font-normal italic leading-[15.6px] tracking-[0] text-base-label">
                      Opcional
                    </div>
                  </div>
                </div>

                {/* Fourth row - Neighborhood, City and State */}
                <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <div className="relative flex w-full items-center gap-1 rounded border border-solid border-base-button bg-base-input sm:w-[200px]">
                    <Input
                      className="h-auto border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="Bairro"
                    />
                  </div>

                  <div className="relative flex w-full flex-1 items-center gap-1 rounded border border-solid border-base-button bg-base-input">
                    <Input
                      className="h-auto border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="Cidade"
                    />
                  </div>

                  <div className="relative flex w-full items-center gap-1 rounded border border-solid border-base-button bg-base-input sm:w-[60px]">
                    <Input
                      className="h-auto border-none bg-transparent p-3 font-text-regular-s text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)] text-base-text placeholder:text-base-label focus-visible:ring-brand-yellow-dark"
                      placeholder="UF"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full rounded-md bg-base-card">
            <CardContent className="flex flex-col gap-8 p-4 md:p-10">
              <div className="flex w-full items-start gap-2">
                <CurrencyDollar size={22} className="text-brand-purple" />

                <div className="flex flex-1 flex-col items-start gap-0.5">
                  <div className="mt-[-1.00px] w-full font-text-regular-m text-base leading-[130%] text-base-subtitle">
                    Pagamento
                  </div>

                  <div className="w-full font-text-regular-s text-sm leading-[130%] text-base-text">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                {paymentMethods.map((method) => (
                  <Button
                    key={method.id}
                    className="hover:bg-base-hover flex w-full items-center gap-3 rounded-md bg-base-button p-4 text-base-title transition-colors hover:text-base-subtitle sm:flex-1"
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
        </div>
        <div className="mt-4 flex w-full flex-col gap-3 lg:mt-0 lg:max-w-[440px]">
          <h2 className="font-title-title-XL text-lg font-bold leading-[130%] text-base-subtitle">
            Cafés selecionados
          </h2>
          <Card className="rounded-md bg-base-card p-4 md:p-10 lg:rounded-[6px_44px]">
            <CardContent className="flex flex-col gap-6 self-stretch p-0">
              <div className="flex flex-wrap justify-between px-1 py-2 sm:flex-nowrap">
                <div className="flex w-full items-center justify-between sm:w-auto sm:gap-5">
                  <img src={americano} alt="Coffee" className="h-16 w-16" />
                  <div className="flex flex-col items-start justify-center gap-2">
                    <span className="font-text-regular-m text-base leading-[130%] text-base-subtitle">
                      Americano
                    </span>
                    <div className="flex flex-1 justify-center gap-2 self-stretch">
                      <div className="flex items-center rounded-md bg-base-button px-2 py-1">
                        <button className="flex h-5 w-5 items-center justify-center text-brand-purple">
                          -
                        </button>
                        <span className="w-5 text-center text-base-text">
                          1
                        </span>
                        <button className="flex h-5 w-5 items-center justify-center text-brand-purple">
                          +
                        </button>
                      </div>
                      <Button className="hover:bg-base-hover rounded-md bg-base-button font-title-title-s text-xs uppercase leading-[160%] text-base-text hover:text-base-subtitle">
                        <Trash className="h-4 w-4 text-brand-purple" />
                        <span className="hidden sm:inline">remover</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-2 w-full text-right text-base font-bold leading-[130%] text-base-text sm:mt-0 sm:w-auto">
                  <strong>R$ 9,90</strong>
                </div>
              </div>
              <Divider />
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-right text-sm leading-[130%] text-base-text">
                    Total de itens
                  </span>
                  <span className="text-right text-base leading-[130%] text-base-text">
                    R$ 9,90
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-right text-sm leading-[130%] text-base-text">
                    Entrega
                  </span>
                  <span className="text-right text-base leading-[130%] text-base-text">
                    R$ 3,00
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle">
                    Total
                  </span>
                  <span className="text-right text-xl font-bold leading-[130%] text-base-subtitle">
                    R$ 12,90
                  </span>
                </div>
              </div>
              <Button className="rounded-md bg-brand-yellow px-2 py-3 font-bold text-base-text text-white hover:bg-brand-yellow-dark">
                CONFIRMAR PEDIDO
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
