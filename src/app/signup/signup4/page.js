import Link from "next/link";
import Input from '@/components/Input';
import Logo from "@/components/logo";
import { FullButton } from "@/components/buttons";

export default function signup3() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Logo />

      <form className="flex flex-col  mt-6">
        <Input label="E-mail" />
        <Input label="Senha" />
        <Input label="Confirmar Senha" />

        <div className="mt-6">
          <Link href="/signup/signup5">
            <FullButton text="Continuar" />
          </Link>
        </div>
      </form>
    </div>
  );
}
