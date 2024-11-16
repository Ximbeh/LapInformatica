import Link from "next/link";
import VerificationInput from '@/components/InputV';
import Logo from "@/components/logo";
import { FullButton } from '@/components/buttons';

export default function Signup3() {
    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />

            <h1 className="text-lapBlue text-sm text-center mb-4">
                    Enviamos um E-mail para C*****@gmail.com. Utilize o código enviado para confirmar a conta.
            </h1>

            <form className="flex flex-col ">
                <div className="grid grid-cols-4 gap-2 h-16">
                    <VerificationInput />
                    <VerificationInput />
                    <VerificationInput />
                    <VerificationInput />
                </div>

                <div className="mt-6">
                    <Link href="/">
                        <FullButton text="Continuar" />
                    </Link>
                </div>
            </form>
        </div>
    );
}
