import Image from "next/image"

export default function Zap(){
    return(
        <div className="flex items-center text-lapBlue text-xs absolute bottom-10 right-0 gap-2 text-center">
            <div>
                <p>Está com duvidas?</p>
                <p>Flae conosco</p>
            </div>
            <Image src="/icons/zap.svg" alt="Whatsapp logo" width={35} height={35}/>
        </div>
    )
} 