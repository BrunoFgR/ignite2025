import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { updateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storedProfileSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().min(2).max(500),
})

type StoreProfileFormValues = z.infer<typeof storedProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileFormValues>({
    resolver: zodResolver(storedProfileSchema),
    values: {
      name: managedRestaurant?.name || '',
      description: managedRestaurant?.description || '',
    },
  })

  function updateManagedRestaurantCache({
    name,
    description,
  }: StoreProfileFormValues) {
    const cached = queryClient.getQueryData(['managed-restaurant'])

    if (cached) {
      queryClient.setQueryData(['managed-restaurant'], {
        ...cached,
        name,
        description,
      })
    }

    return { cache: cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate: ({ name, description }) => {
      const { cache } = updateManagedRestaurantCache({ name, description })

      return { previousProfile: cache }
    },
    onError: (_, __, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(
          ['managed-restaurant'],
          context.previousProfile,
        )
      }
    },
  })

  async function handleUpdateProfile(values: StoreProfileFormValues) {
    try {
      await updateProfileFn(values)

      toast.success('Perfil atualizado com sucesso')
    } catch (error) {
      toast.error('Erro ao atualizar perfil')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis aos seus
          clientes
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="gap-4 space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input
              id="name"
              type="text"
              className="col-span-3"
              {...register('name')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea
              id="description"
              className="col-span-3"
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="success" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
