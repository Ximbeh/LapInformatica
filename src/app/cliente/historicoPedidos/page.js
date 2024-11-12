import Logo from "@/components/logo";
import Pedido from "@/components/pedido";
import pedidosData from "@/data/pedidos.json"

export default function HistoricoPedido(){
    const pedidosHistorico = pedidosData.filter(pedido => pedido.status == "Finalizado");

       return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />

            <div className="w-full mt-10">
                <h2 className="text-lapBlue text-xl text-center mb-6">Historico de pedidos</h2>
                {pedidosHistorico.map((pedido) => (
                    <Pedido key={pedido.id} pedido={pedido} />
                ))}
            </div>
        </div>
    );
}