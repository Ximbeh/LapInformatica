import Link from "next/link"; 
import Logo from "@/components/logo" 
import { FullButton } from "@/components/buttons";

export default function forgetpass4() { 
    return ( <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', marginTop: '5rem' }}> 
    
    <Logo/>
            <div style={{padding: '1rem'}}>
            <strong>Sua senha foi alterada!</strong>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', width: '300px', marginTop: '1rem' }}>

            <Link href="/login" style={{ textDecoration: 'none', marginTop: '1rem' }}>
                    <FullButton text="Entrar" />
            </Link>
        </form>

    </div>
);
}