import Image from "next/image";
import { IconButton } from "./buttons";
import Link from "next/link";

export default function Pedido({ pedido }) {
    return (
        <div className="flex w-full justify-between items-center border-b-2 border-gray-400 py-4">
            <div>
                <p className="text-xs text-gray-400">{pedido.data}</p>
                <p>{pedido.conteudo}</p>
                <p className="text-xs text-gray-400">{pedido.status}</p>
            </div>
                <IconButton
                    icon={<Image src="/icons/eye.svg" alt="Olhar" width={24} height={24} />}
                    small={true} link={`pedido/${pedido.id}`}
                />
        </div>
    );
}
