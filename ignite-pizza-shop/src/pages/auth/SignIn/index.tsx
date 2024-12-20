import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signInFormSchema = z.object({
  email: z.string().email(),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignIn() {
  const { register, handleSubmit } = useForm<SignInFormData>()

  function handleSignIn(data: SignInFormData) {
    console.log(data)
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild className="absolute right-8  top-8" variant="ghost">
          <Link to={'/sign-up'} className="">
            Novo estabelecimento
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button type="submit" className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
