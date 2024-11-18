'use client'
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import RightMenun from "@/components/right-menu";
import { AiFillCode } from "react-icons/ai";

interface HeaderProps {
    hash: string;
}


export function Header({hash}:HeaderProps) {
    console.log(hash)
    return (
        <header className="h-[70px] w-full max-xl:px-5 text-white items-center flex justify-center fixed top-0 left-0 right-0 bg-zinc-950/50 backdrop-blur-md  z-10">
            <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
                <h2 className="uppercase text-lg font-extrabold flex gap-1 items-center">
                    <AiFillCode className="fill-primary" size={20} />
                    <span className="mt-[2px]">
                        Augusto Sousa
                    </span>
                </h2>
                <Link href="#home" className="max-md:hidden hover:text-zinc-100 hover:border-b border-primary">
                    Home
                </Link>
                <Link href="#projects" className="max-md:hidden hover:text-zinc-100 hover:border-b border-primary">
                    Projetos
                </Link>
                <Link href="#about" className="max-md:hidden hover:text-zinc-100 hover:border-b border-primary">
                    Sobre mim
                </Link>
                <Link href="#contact" className="max-md:hidden hover:text-zinc-100 hover:border-b border-primary">
                    Contato
                </Link>

                <div className="flex gap-4 max-sm:hidden">
                    <Link href="https://www.linkedin.com/in/-augusto-sousaa" target="_blank">
                        <BsLinkedin />
                    </Link>

                    <Link href="https://github.com/Augusto9237" target="_blank">
                        <BsGithub />
                    </Link>
                    <BsInstagram />
                </div>
            </div>

            <div className="md:hidden">
                <RightMenun />
            </div>
        </header>
    )
}
