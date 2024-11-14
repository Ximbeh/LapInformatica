import Logo from "@/components/logo";
import Pedido from "@/components/pedido";
import pedidosData from "@/data/pedidos.json"

export default function NovoPedido(){
    const pedidosEmAndamento = pedidosData.filter(pedido => pedido.status == "Esperando ser aceito");

       return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />

            <div className="w-full mt-10">
                <h2 className="text-lapBlue text-2xl text-center mb-6">Novo pedido</h2>
                {pedidosEmAndamento.map((pedido) => (
                    <Pedido key={pedido.id} pedido={pedido} rota={"pedido"} />
                ))}
            </div>
        </div>
    );
}