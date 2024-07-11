import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

interface WhatsappButtonProps {
    href: string,
}

export default function WhatsappButton({ href }: WhatsappButtonProps) {
    return <Link target="_blank" href={href} className="fixed bottom-[2.5rem] right-0 translate-x-[-50%] translate-y-[-50%] p-2.5 transition shadow-md bg-green-600 rounded-full hover:bg-green-700 z-50"><FaWhatsapp size={36} color="white" /></Link>
}