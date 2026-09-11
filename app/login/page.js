import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import FormField from "@/components/FormField";
import PrimaryButton from "@/components/PrimaryButton";

export const metadata = {
  title: "Entrar — ReUse!",
};

export default function LoginPage() {
  return (
    <AuthShell
      headline="Cada item reaproveitado é um passo a menos para o descarte."
      message="Entre na sua conta para continuar comprando, vendendo e dando um novo destino ao que ainda tem valor."
    >
      <h1 className="font-display italic text-3xl text-ink">Bem-vindo de volta</h1>
      <p className="mt-2 text-sm text-ink/60">
        Ainda não tem conta?{" "}
        <Link href="/cadastro" className="text-pink-deep underline underline-offset-4">
          Cadastre-se
        </Link>
      </p>

      <form className="mt-8 space-y-6">
        <FormField
          id="email"
          label="E-mail"
          type="email"
          placeholder="voce@email.com"
          autoComplete="email"
        />
        <FormField
          id="password"
          label="Senha"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
        />

        <div className="flex justify-end">
          <Link
            href="/esqueci-senha"
            className="text-sm text-ink/60 hover:text-pink-deep"
          >
            Esqueci minha senha
          </Link>
        </div>

        <PrimaryButton>Entrar</PrimaryButton>
      </form>
    </AuthShell>
  );
}
