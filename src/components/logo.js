import Image from "next/image"

export default function Logo() {
    return(
        <Image
            className="absolute top-4"
            src="/icons/Logo.png"
            alt="Logo"
            width={70}
            height={70}
        />
    )
}