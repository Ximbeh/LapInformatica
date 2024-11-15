import Link from "next/link";
import Input from '@/components/Input'
import Logo from "@/components/logo"
import { FullButton } from "@/components/buttons";


export default function signup3() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '10rem' }}>
            <Logo />

            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                <Input label="E-mail" />

                <Input label="Senha" />

                <Input label="Confirmar" />

                <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/signup5" style={{ textDecoration: 'none' }}>
                        <FullButton text="Continuar" />
                    </Link>
                </div>

            </form>
        </div>
    );
}