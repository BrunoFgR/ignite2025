import { Input } from "../../components/Input";

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
      icon: "https://c.animaapp.com/ma90dl2m0T2ZgM/img/icon-12.svg",
    },
    {
      id: "debit",
      label: "CARTÃO DE DÉBITO",
      icon: "https://c.animaapp.com/ma90dl2m0T2ZgM/img/icon.svg",
    },
    {
      id: "cash",
      label: "DINHEIRO",
      icon: "https://c.animaapp.com/ma90dl2m0T2ZgM/img/icon-7.svg",
    },
  ];

  return (
    <div className="flex w-full max-w-[640px] flex-col items-start gap-3">
      <Card className="bg-basecard w-full rounded-md">
        <CardContent className="flex flex-col gap-8 p-10">
          <div className="flex w-full items-start gap-2">
            <img
              className="h-[22px] w-[22px]"
              alt="Icon"
              src="https://c.animaapp.com/ma90dl2m0T2ZgM/img/icon-10.svg"
            />

            <div className="flex flex-1 flex-col items-start gap-0.5">
              <div className="font-text-regular-m text-basesubtitle mt-[-1.00px] w-full text-[length:var(--text-regular-m-font-size)] leading-[var(--text-regular-m-line-height)] tracking-[var(--text-regular-m-letter-spacing)]">
                Endereço de Entrega
              </div>

              <div className="font-text-regular-s text-basetext h-[21px] w-full whitespace-nowrap text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]">
                Informe o endereço onde deseja receber seu pedido
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-4">
            {/* First row - CEP */}
            <div className="bg-baseinput relative flex w-[200px] items-center gap-1 rounded border border-solid border-[#e6e5e5]">
              <Input
                className="font-text-regular-s text-baselabel h-auto border-none bg-transparent p-3 text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]"
                placeholder="CEP"
              />
            </div>

            {/* Second row - Street */}
            <div className="bg-baseinput relative flex w-full items-center gap-1 rounded border border-solid border-[#e6e5e5]">
              <Input
                className="font-text-regular-s text-baselabel h-auto border-none bg-transparent p-3 text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]"
                placeholder="Rua"
              />
            </div>

            {/* Third row - Number and Complement */}
            <div className="flex w-full items-center gap-3">
              <div className="bg-baseinput relative flex w-[200px] items-center gap-1 rounded border border-solid border-[#e6e5e5]">
                <Input
                  className="font-text-regular-s text-baselabel h-auto border-none bg-transparent p-3 text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]"
                  placeholder="Número"
                />
              </div>

              <div className="bg-baseinput relative flex flex-1 items-center gap-1 rounded border border-solid border-[#e6e5e5]">
                <Input
                  className="font-text-regular-s text-baselabel h-auto border-none bg-transparent p-3 text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]"
                  placeholder="Complemento"
                />
                <div className="text-baselabel w-fit whitespace-nowrap pr-3 font-['Roboto',Helvetica] text-xs font-normal italic leading-[15.6px] tracking-[0]">
                  Opcional
                </div>
              </div>
            </div>

            {/* Fourth row - Neighborhood, City and State */}
            <div className="flex w-full items-center gap-3">
              <div className="bg-baseinput relative flex w-[200px] items-center gap-1 rounded border border-solid border-[#e6e5e5]">
                <Input
                  className="font-text-regular-s text-baselabel h-auto border-none bg-transparent p-3 text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]"
                  placeholder="Bairro"
                />
              </div>

              <div className="bg-baseinput relative flex flex-1 items-center gap-1 rounded border border-solid border-[#e6e5e5]">
                <Input
                  className="font-text-regular-s text-baselabel h-auto border-none bg-transparent p-3 text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]"
                  placeholder="Cidade"
                />
              </div>

              <div className="bg-baseinput relative flex w-[60px] items-center gap-1 rounded border border-solid border-[#e6e5e5]">
                <Input
                  className="font-text-regular-s text-baselabel h-auto border-none bg-transparent p-3 text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]"
                  placeholder="UF"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-basecard w-full rounded-md">
        <CardContent className="flex flex-col gap-8 p-10">
          <div className="flex w-full items-start gap-2">
            <img
              className="h-[22px] w-[22px]"
              alt="Icon"
              src="https://c.animaapp.com/ma90dl2m0T2ZgM/img/icon-1.svg"
            />

            <div className="flex flex-1 flex-col items-start gap-0.5">
              <div className="font-text-regular-m text-basesubtitle mt-[-1.00px] w-full text-[length:var(--text-regular-m-font-size)] leading-[var(--text-regular-m-line-height)] tracking-[var(--text-regular-m-letter-spacing)]">
                Pagamento
              </div>

              <div className="font-text-regular-s text-basetext h-[21px] w-full whitespace-nowrap text-[length:var(--text-regular-s-font-size)] leading-[var(--text-regular-s-line-height)] tracking-[var(--text-regular-s-letter-spacing)]">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-3">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className="bg-basebutton hover:bg-basehover flex flex-1 items-center gap-3 rounded-md p-4 transition-colors"
              >
                <img
                  className="h-4 w-4"
                  alt={`${method.label} icon`}
                  src={method.icon}
                />
                <div className="font-components-button-s text-basetext mt-[-0.50px] whitespace-nowrap text-[length:var(--components-button-s-font-size)] font-[number:var(--components-button-s-font-weight)] leading-[var(--components-button-s-line-height)] tracking-[var(--components-button-s-letter-spacing)]">
                  {method.label}
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
