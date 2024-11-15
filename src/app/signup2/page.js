import Link from "next/link";
import Image from 'next/image';
import Logo from "@/components/logo"
import {FullButton, IconButton} from '@/components/buttons'



export default function signup2() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '10rem' }}>
            <Logo />

            <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

                <div className="grid grid-cols-2 gap-8">
                    <IconButton icon={<Image src="/icons/Moto.svg" alt="Icone moto" width={70} height={70} />} text="Entregador" link="/signup3" />
                    <IconButton icon={<Image src="/icons/user.svg" alt="Icone user" width={70} height={70} />} text="Cliente" link="/signup4" />
                </div>
                
                <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/signup" style={{ textDecoration: 'none' }}>
                        <FullButton text="Voltar" />
                    </Link>
                </div>

            </form>

        </div>
    );
}