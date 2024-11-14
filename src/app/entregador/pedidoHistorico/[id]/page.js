"use client"

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import pedidosData from '@/data/pedidos.json';
import Logo from '@/components/logo';
import Image from 'next/image';
import { ButtonContainer, FullButton, HalfButton } from '@/components/buttons';


export default function Pedido() {
    const { id } = useParams();
    const router = useRouter();
    const pedido = pedidosData.find((pedido) => pedido.id === Number(id));

    if (!pedido) {
        return <p>Pedido não encontrado.</p>;
    }

  

    const handleBack = () => {
        router.push("/entregador/dashboardEntregador")
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />

            <ul className='w-full flex flex-col gap-4 mb-10'>
                <li className='text-sm text-gray-400'><strong className='text-lapBlue text-lg'>Conteúdo:</strong><br/> {pedido.conteudo}</li>
                <li className='text-sm text-gray-400'><strong className='text-lapBlue text-lg'>Status:</strong><br/>{pedido.status}</li>
                <li className='text-sm text-gray-400'><strong className='text-lapBlue text-lg'>Origem:</strong><br/>{pedido.origem.logradouro}, {pedido.origem.numero} - {pedido.origem.cep}</li>
                <li className='text-sm text-gray-400'><strong className='text-lapBlue text-lg'>Destino:</strong><br/>{pedido.destino.logradouro}, {pedido.destino.numero} - {pedido.destino.cep}</li>
                <li className='text-sm text-gray-400'><strong className='text-lapBlue text-lg'>Peso:</strong><br/>{pedido.peso}</li>
                <li className='text-sm text-gray-400'><strong className='text-lapBlue text-lg'>Preço final estimado:</strong><br/><span className='text-lapDarkBlue text-4xl flex gap-2 items-end'>R$ {pedido.preco}  <Image src="/icons/info.svg" alt="info" height={25} width={25}/></span></li>
            </ul>

            <FullButton text="Voltar" onClick={handleBack}/>
        </div>
    );
}
