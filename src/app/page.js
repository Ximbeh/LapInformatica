import Link from "next/link";
import Input from '../components/Input'
import {FullButton, HalfButton, ButtonContainer, IconButton} from '../components/buttons'
import Image from 'next/image';
import Logo from "@/components/logo";

export default function Home() {
  return (
    <div>
      <Logo />
     

      <div className="flex flex-col gap-4 mt-24">
        <Link href='/cliente/dashboardCliente'>Pagina de cliente</Link>
        <Link href='/entregador/dashboardEntregador'>Pagina do entregador</Link>
        <Input label="Email"/>
        <FullButton text="Botão"></FullButton>
        <ButtonContainer>
          <HalfButton darker={true} text="Escuro"></HalfButton>
          <HalfButton darker={false} text="Claro"></HalfButton>
        </ButtonContainer>

        <div className="grid grid-cols-2 gap-8">
          <IconButton icon={<Image src="/icons/Box-Plus.svg" alt="Box Plus" width={70} height={70}/>} text="Novo pedido" link="/"/>
          <IconButton icon={<Image src="/icons/andamento.svg" alt="Box Plus" width={70} height={70}/>} text="Pedidos em andamento" link="/"/>
          <IconButton icon={<Image src="/icons/Box-Check.svg" alt="Box Plus" width={70} height={70}/>} text="Históricos de pedidos" link="/"/>
          <IconButton icon={<Image src="/icons/user.svg" alt="Box Plus" width={70} height={70}/>} text="Perfil do usuário" link="/"/>
        </div>

        <IconButton icon={<Image src="/icons/eye.svg" alt="Olhar" width={24} height={24}/>} small={true} link="/"/>


      </div>
    </div>
  );
}
