import Image from "next/image"

export default function Logo() {
    return(
        <Image
            className="absolute top-20"
            src="/icons/Logo.png"
            alt="Logo"
            width={80}
            height={80}
        />
    )
}