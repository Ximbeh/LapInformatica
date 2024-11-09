import Link from "next/link";
import Input from '../components/Input'
import {FullButton, HalfButton, ButtonContainer, IconButton} from '../components/buttons'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image className="mx-auto" src='/icons/Logo.png' alt="Logo" width={70} height={70}/>
      <Link href='/login'>Clique aqui para ir para a tela de login</Link>

      <div className="flex flex-col gap-4">
        <Input label="Email"/>
        <FullButton text="Botão"></FullButton>
        <ButtonContainer>
          <HalfButton darker={true} text="Escuro"></HalfButton>
          <HalfButton darker={false} text="Claro"></HalfButton>
        </ButtonContainer>

        <div className="grid grid-cols-2 gap-8">
          <IconButton icon={<Image src="/icons/Box-Plus.svg" alt="Box Plus" width={70} height={70}/>} text="Novo pedido"/>
          <IconButton icon={<Image src="/icons/andamento.svg" alt="Box Plus" width={70} height={70}/>} text="Pedidos em andamento"/>
          <IconButton icon={<Image src="/icons/Box-Check.svg" alt="Box Plus" width={70} height={70}/>} text="Históricos de pedidos"/>
          <IconButton icon={<Image src="/icons/user.svg" alt="Box Plus" width={70} height={70}/>} text="Perfil do usuário"/>
        </div>

        <IconButton icon={<Image src="/icons/eye.svg" alt="Olhar" width={24} height={24}/>} small={true}/>


      </div>
    </div>
  );
}
