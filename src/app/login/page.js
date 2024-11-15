import Link from "next/link";
import Input from '@/components/Input'
import Logo from "@/components/logo"
import { FullButton } from "@/components/buttons";

export default function Login() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '10rem' }}>
            <Logo/>

            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            
                <Input label="Email"/>

                <Input label="Senha"/>

                <Link href="/forgetpass" style={{ textAlign: 'left', marginBottom: '1rem', fontSize: '0.7rem' }}>
                <span className="text-lapBlue text-center mt-1 text-md leading-5">
                Esqueceu a senha?
                </span>
                </Link>

                <FullButton text="Entrar"></FullButton>

            </form>

            <Link href="/signup">
                <span className="text-lapBlue text-center mt-1 text-md leading-5" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.7rem' }}>
                Não tem conta? Cadastre-se!
                </span>
            </Link>
        </div>
    );
}
