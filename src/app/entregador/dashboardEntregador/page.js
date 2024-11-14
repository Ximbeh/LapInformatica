import Link from "next/link";
import Image from "next/image";
import { IconButton } from "@/components/buttons";
import Logo from "@/components/logo"
import Zap from "@/components/zap"

export default function DashboardEntregador() {
    return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />

            <div className="grid grid-cols-2 gap-8">
                <IconButton
                    icon={<Image src="/icons/Box-Plus.svg" alt="Box Plus" width={70} height={70} />}
                    text="Novo pedido"
                    link="/entregador/novoPedido"
                />
                <IconButton
                    icon={<Image src="/icons/andamento.svg" alt="Box Plus" width={70} height={70} />}
                    text="Pedidos ativos"
                    link="/entregador/pedidosAtivos"
                />
                <IconButton
                    icon={<Image src="/icons/Box-Check.svg" alt="Box Plus" width={70} height={70} />}
                    text="Históricos de pedidos"
                    link="/entregador/historicoPedidos"
                />
                <IconButton
                    icon={<Image src="/icons/user.svg" alt="Box Plus" width={70} height={70} />}
                    text="Perfil do usuário"
                    link="/"
                />
            </div>
            <Zap />
        </div>
    );
}
