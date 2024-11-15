import Link from "next/link";
import Input from '@/components/Input'
import Logo from "@/components/logo"
import { FullButton } from "@/components/buttons";


export default function signup3() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '10rem' }}>
            <Logo />

            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                <Input label="Tipo de veículo" />

                <Input label="Placa do veículo" />

                <Input label="Chachi do veículo" />

                <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/signup4" style={{ textDecoration: 'none' }}>
                        <FullButton text="Continuar" />
                    </Link>
                </div>

            </form>
        </div>
    );
}