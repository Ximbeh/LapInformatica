import Link from "next/link";
import Input from '@/components/Input'
import Logo from "@/components/logo"
import { FullButton } from "@/components/buttons";

export default function forgetpass2() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '5rem' }}>
            <Logo/>

            <div style={{padding: '1rem'}}>
                <h1>Informe o seu e-mail para que possamos enviar um código de recuperação de senha.</h1>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', width: '300px', marginTop: '1rem' }}>
            
                <Input label="Confirmar Email"/>

                <Link href="/forgetpass3" style={{ textDecoration: 'none', marginTop: '1rem' }}>
                        <FullButton text="Continuar" />
                </Link>
            </form>

        </div>
    );
}
