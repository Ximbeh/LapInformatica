import Link from "next/link";
import Input from '@/components/Input'
import Logo from "@/components/logo"
import { FullButton } from "@/components/buttons";


export default function signup() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '10rem' }}>
            <Logo />

            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                <Input label="Nome" />

                <Input label="CPF" />

                <Input label="Telefone" />

                <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/signup2" style={{ textDecoration: 'none' }}>
                        <FullButton text="Continuar" />
                    </Link>
                </div>

            </form>

            <Link href="/login" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.7rem' }}>
                <span className="text-lapBlue text-center mt-1 text-md leading-5">
                    Já possui uma conta? Faça login
                </span>
            </Link>
        </div>
    );
}