"use client";

import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { auth } from "@/lib/auth";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import Logo from "@/components/style/logo";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: RegisterSchemaType) => {
      return await auth.register(data.name, data.email, data.password);
    },
    onSuccess: (data) => {
      if (data.status === 'error') {
        toast.error(data.message);
      } else {
        toast.success('Conta criada com sucesso!');
        router.push('/dashboard');
      }
    },
    onError: () => {
      toast.error('Erro ao criar conta');
    }
  });

  const onSubmit = (data: RegisterSchemaType) => {
    mutateAsync(data);
  }

  return (
    <section className="w-full flex items-center justify-center py-20">
      <AnimatedGroup preset="slide" className="w-full xl:max-w-md flex flex-col gap-8">
        <LoginHeader />
        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            {...form.register('name')}
          />
          <Input
            type="email"
            placeholder="Email"
            {...form.register('email')}
          />
          <Input
            type="password"
            placeholder="Senha"
            {...form.register('password')}
          />
          <Button size="lg" type="submit" disabled={isPending}>
            {isPending ? <Loader className="w-4 h-4 animate-spin" /> : 'Criar conta'}
          </Button>
        </form>
        <LoginFooter />
      </AnimatedGroup>
    </section >
  );
}

const LoginHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <Logo />
      <div>
        <h1 className="text-3xl font-bold">
          {config.public.register.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {config.public.register.description}
        </p>
      </div>
    </div>
  );
}

const LoginFooter = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="w-full h-[1px] bg-muted-foreground/20" />
        <p className="text-sm text-muted-foreground">Ou</p>
        <div className="w-full h-[1px] bg-muted-foreground/20" />
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Já tem uma conta? <Link href="/login" className="text-primary">Faça login</Link>
      </p>
    </div>
  );
}
