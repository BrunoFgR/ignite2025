import { AddressCard } from "./sections/AddressCard";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentCard } from "./sections/PaymentCard";
import { CartCard } from "./sections/CartCard";

const checkoutValidationSchema = z.object({
  address: z.object({
    cep: z
      .string()
      .min(9)
      .max(9)
      .regex(/^\d{5}-\d{3}$/),
    street: z.string().min(2).max(100),
    number: z.string().min(1).max(100),
    complement: z.string().min(0).max(100),
    neighborhood: z.string().min(2).max(100),
    city: z.string().min(2).max(100),
    uf: z.string().min(1).max(2),
  }),
  paymentMethod: z.enum(["credit", "debit", "money"]),
  items: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.number(),
      quantity: z.number().min(1),
    }),
  ),
});

export type CheckoutFormData = z.infer<typeof checkoutValidationSchema>;

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutValidationSchema),
    defaultValues: {
      address: {
        cep: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        uf: "",
      },
      paymentMethod: "credit",
      items: [],
    },
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
  };

  return (
    <div className="flex max-w-full flex-col px-4 dark:bg-base-background md:pt-4 lg:px-8 xl:px-40">
      <Form {...checkoutForm}>
        <form
          onSubmit={checkoutForm.handleSubmit(onSubmit)}
          className="mb-12 flex flex-col justify-start gap-8 lg:mb-0 lg:flex-row"
        >
          <div className="flex w-full flex-col items-start gap-3">
            <h2 className="font-title-title-XL text-lg font-bold leading-[130%] text-base-subtitle dark:text-base-title">
              Complete seu pedido
            </h2>
            <AddressCard />
            <PaymentCard />
          </div>
          <div className="mt-4 flex w-full flex-col gap-3 lg:mt-0 lg:max-w-[440px]">
            <h2 className="font-title-title-XL text-lg font-bold leading-[130%] text-base-subtitle dark:text-base-title">
              Cafés selecionados
            </h2>
            <CartCard />
          </div>
        </form>
      </Form>
    </div>
  );
}
