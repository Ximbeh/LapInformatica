"use client";

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import pedidosData from '@/data/pedidos.json';
import Logo from '@/components/logo';
import Image from 'next/image';
import { ButtonContainer, HalfButton } from '@/components/buttons';

export default function Pedido() {
    const { id } = useParams();
    const router = useRouter();
    const pedido = pedidosData.find((pedido) => pedido.id === Number(id));

    const [showModal, setShowModal] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(pedido ? pedido.status : '');

    if (!pedido) {
        return <p>Pedido não encontrado.</p>;
    }

    const handleBack = () => {
        router.push("/entregador/dashboardEntregador");
    };

    const handleStatusChange = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleConfirmStatus = () => {
        // Aqui você pode adicionar a lógica para atualizar o status do pedido, se necessário
        pedido.status = selectedStatus; // Atualiza o status localmente (para simular atualização)
        setShowModal(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />

            <ul className="w-full flex flex-col gap-4 mb-10">
                <li className="text-sm text-gray-400"><strong className="text-lapBlue text-lg">Conteúdo:</strong><br /> {pedido.conteudo}</li>
                <li className="text-sm text-gray-400"><strong className="text-lapBlue text-lg">Status:</strong><br />{pedido.status}</li>
                <li className="text-sm text-gray-400"><strong className="text-lapBlue text-lg">Origem:</strong><br />{pedido.origem.logradouro}, {pedido.origem.numero} - {pedido.origem.cep}</li>
                <li className="text-sm text-gray-400"><strong className="text-lapBlue text-lg">Destino:</strong><br />{pedido.destino.logradouro}, {pedido.destino.numero} - {pedido.destino.cep}</li>
                <li className="text-sm text-gray-400"><strong className="text-lapBlue text-lg">Peso:</strong><br />{pedido.peso}</li>
                <li className="text-sm text-gray-400"><strong className="text-lapBlue text-lg">Preço final estimado:</strong><br /><span className="text-lapDarkBlue text-4xl flex gap-2 items-end">R$ {pedido.preco} <Image src="/icons/info.svg" alt="info" height={25} width={25} /></span></li>
            </ul>

            <ButtonContainer>
                <HalfButton darker={true} text="Voltar" onClick={handleBack}></HalfButton>
                <HalfButton darker={false} text="Mudar status" onClick={handleStatusChange}></HalfButton>
            </ButtonContainer>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold mb-4">Mudar Status</h2>
                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        >
                            <option value="Esperando ser aceito">Esperando ser aceito</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="A caminho">A caminho</option>
                            <option value="Entregue">Entregue</option>
                            <option value="Finalizado">Finalizado</option>
                        </select>
                        <ButtonContainer>
                            <HalfButton darker={true} text="Voltar" onClick={handleCloseModal}></HalfButton>
                            <HalfButton darker={false} text="Confirmar" onClick={handleConfirmStatus}></HalfButton>
                        </ButtonContainer>
                    </div>
                </div>
            )}
        </div>
    );
}
