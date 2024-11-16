import Link from "next/link";
import Input from '@/components/Input';
import Logo from "@/components/logo";
import { FullButton } from "@/components/buttons";

export default function signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Logo />

      <form className="flex flex-col mt-6">
        <Input label="Nome" />
        <Input label="CPF" />
        <Input label="Telefone" />

        <div className="mt-6">
          <Link href="/signup/signup2">
            <FullButton text="Continuar" />
          </Link>
        </div>
      </form>

      <Link href="/" className="mt-4 text-lapBlue text-center text-xs">
        Já possui uma conta? Faça login
      </Link>
    </div>
  );
}
