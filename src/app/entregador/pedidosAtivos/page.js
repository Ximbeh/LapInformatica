import Logo from "@/components/logo";
import Pedido from "@/components/pedido";
import pedidosData from "@/data/pedidos.json"

export default function PedidosAtivos(){
    const pedidosEmAndamento = pedidosData.filter(
        pedido => pedido.status !== "Esperando ser aceito" && pedido.status !== "Finalizado"
      );
       return (
        <div className="flex flex-col items-center justify-center h-screen relative">
            <Logo />

            <div className="w-full mt-40">
                <h2 className="text-lapBlue text-2xl text-center mb-6">Seus pedidos ativos</h2>
                {pedidosEmAndamento.map((pedido) => (
                    <Pedido key={pedido.id} pedido={pedido} rota={"pedidoAtivo"} />
                ))}
            </div>
        </div>
    );
}