import Link from "next/link";
import Input from '@/components/Input';
import Logo from "@/components/logo";
import { FullButton } from "@/components/buttons";

export default function forgetpass2() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Logo />

        <h1 className="text-sm font-medium p-4 text-center text-lapBlue">
          Informe o seu e-mail para que possamos enviar um código de recuperação de senha.
        </h1>

      <form className="flex flex-col mt-4">
        <Input label="Confirmar Email" />

        <Link href="/forgetpassword/forgetpass3" className="mt-4">
          <FullButton text="Continuar" />
        </Link>
      </form>
    </div>
  );
}
