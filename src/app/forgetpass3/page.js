import Link from "next/link";
import VerificationInput from '@/components/InputV';
import Logo from "@/components/logo";
import { FullButton } from '@/components/buttons';

export default function forgetpass3() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '10rem' }}>
            <Logo />

            <div style={{padding: '1rem'}}>
                <strong>Enviamos um E-mail para C*****@gmaiil.com. Utilize o código enviado para confirmar a conta.</strong>
            </div>

            <form style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <VerificationInput />
                    <VerificationInput />
                    <VerificationInput />
                    <VerificationInput />
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/forgetpass4" style={{ textDecoration: 'none' }}>
                        <FullButton text="Continuar" />
                    </Link>
                </div>
            </form>
        </div>
    );
}