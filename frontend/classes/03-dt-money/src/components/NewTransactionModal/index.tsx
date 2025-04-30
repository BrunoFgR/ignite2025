import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { ArrowCircleUp, X } from "phosphor-react";
import { ArrowCircleDown } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Overlay,
  Content,
  CloseButton,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

const newTransactionSchema = z.object({
  description: z.string().min(1).max(100),
  price: z.number().min(0),
  category: z.string().min(1).max(100),
  // type: z.enum(["income", "outcome"]),
});

type NewTransactionFormData = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormData>({
    resolver: zodResolver(newTransactionSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Nova Transação</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Valor"
            required
            {...register("price", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
