import { AddressCard } from "./sections/AddressCard";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentCard } from "./sections/PaymentCard";
import { CartCard } from "./sections/CartCard";
import { useCartContext } from "@/hooks/useCart";
import { useEffect } from "react";
import { mainUrl } from "@/lib/axios";
import { useToast } from "@/hooks/useToast";
import { useNavigate, useNavigation } from "react-router";

const checkoutValidationSchema = z.object({
  address: z.object({
    cep: z
      .string({ message: "CEP deve ter pelo menos 9 caracteres" })
      .min(9)
      .max(9)
      .regex(/^\d{5}-\d{3}$/),
    street: z
      .string()
      .min(2, { message: "Rua deve ter pelo menos 2 caracteres" })
      .max(100, { message: "Rua deve ter no máximo 100 caracteres" }),
    number: z
      .string()
      .min(1, { message: "Número deve ter pelo menos 1 caractere" })
      .max(100, { message: "Número deve ter no máximo 100 caracteres" }),
    complement: z
      .string()
      .min(0)
      .max(100, { message: "Complemento deve ter no máximo 100 caracteres" }),
    neighborhood: z
      .string()
      .min(2, { message: "Bairro deve ter pelo menos 2 caracteres" })
      .max(100, { message: "Bairro deve ter no máximo 100 caracteres" }),
    city: z
      .string()
      .min(2, { message: "Cidade deve ter pelo menos 2 caracteres" })
      .max(100, { message: "Cidade deve ter no máximo 100 caracteres" }),
    uf: z
      .string()
      .min(1, { message: "UF deve ter pelo menos 1 caractere" })
      .max(2, { message: "UF deve ter no máximo 2 caracteres" }),
  }),
  paymentMethod: z.union([z.string(), z.enum(["credit", "debit", "cash"])]),
  items: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      price: z.number(),
      quantity: z.number().min(1),
      stock: z.number().min(1),
      image: z.string(),
    }),
  ),
});

export type CheckoutFormData = z.infer<typeof checkoutValidationSchema>;
type AddressResponse = z.infer<typeof checkoutValidationSchema>["address"] & {
  id: number;
};
type OrderResponse = z.infer<typeof checkoutValidationSchema>["items"] & {
  paymentMethod: string;
  address: AddressResponse;
  id: number;
};

export function Checkout() {
  const { cart, cleanCart } = useCartContext();
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const { setValue, reset } = checkoutForm;

  useEffect(() => {
    setValue("items", cart);
  }, [cart, setValue]);

  const onSubmit = async (formData: CheckoutFormData) => {
    try {
      const address = await mainUrl.post<AddressResponse>(
        "/address",
        formData.address,
      );
      const order = await mainUrl.post<OrderResponse>("/orders", {
        addressId: address.data,
        paymentMethod: formData.paymentMethod,
        items: formData.items,
      });

      cleanCart();
      reset();
      toast({
        title: "Pedido realizado com sucesso",
        description: "Aguarde o seu pedido chegar em breve.",
        variant: "success",
      });
      navigate(`/success/${order.data.id}`);
    } catch (error) {
      toast({
        title: "Erro ao realizar o pedido",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
      console.error(error);
    }
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
