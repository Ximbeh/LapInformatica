import Link from "next/link";
import Logo from "@/components/logo";
import { FullButton } from "@/components/buttons";

export default function forgetpass4() {
  return (
<div className="flex flex-col items-center justify-center h-screen relative">
      <Logo />

        <h1 className="text-sm font-medium p-4 text-center text-lapBlue">Sua senha foi alterada!</h1>

        <Link href="/" className="mt-4 w-full">
          <FullButton text="Entrar" />
        </Link>
    </div>
  );
}
