import Image from "next/image"

export default function Logo() {
    return(
        <Image
            className="absolute top-0"
            src="/icons/Logo.png"
            alt="Logo"
            width={80}
            height={80}
        />
    )
}