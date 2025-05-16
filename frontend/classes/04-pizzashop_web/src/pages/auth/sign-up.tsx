import { Helmet } from '@dr.pogodin/react-helmet'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpSchema = z.object({
  restaurantName: z.string().min(2).max(100),
  managerName: z.string().min(2).max(100),
  phone: z.string().min(10).max(15),
  email: z.string().email(),
})

type SignUpFormValues = z.infer<typeof signUpSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  })

  const handleSignUp = async (data: SignUpFormValues) => {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastrar" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute top-8 right-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-muted-foreground text-sm">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                placeholder="Nome do gerente"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do restaurante</Label>
              <Input
                id="restaurantName"
                type="text"
                placeholder="Nome do restaurante"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="text"
                placeholder="(xx) xxxxx-xxxx"
                {...register('phone')}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
              Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                Termos de Serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                Política de Privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
