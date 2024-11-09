'use client'
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import RightMenun from "@/components/right-menu";
import { AiFillCode } from "react-icons/ai";
import { useParams } from "next/navigation";
import { useEffect, useState, } from "react";
import clsx from "clsx";


export function Header() {
    const params = useParams()
    const [hash, setHash] = useState('');
    

    useEffect(() => {
        // Função para obter o valor do hash
        const handleHashChange = () => {
            setHash(window.location.hash); // Obter o valor da hash
        };

        

        return () => {
            handleHashChange();
        };
    }, [params]);


    return (
        <header className="h-[70px] w-full max-xl:px-5 text-white items-center flex justify-center fixed top-0 left-0 right-0 bg-zinc-950/50 backdrop-blur-md  z-10">
            <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
                <h2 className="uppercase text-lg font-extrabold flex gap-1 items-center">
                    <AiFillCode className="fill-primary" size={20} />
                    <span className="mt-[2px]">
                        Augusto Sousa
                    </span>
                </h2>
                <Link href="#home" className={clsx("max-sm:hidden", hash === '#home'? 'text-primary' : '')}>
                    Home
                </Link>
                <Link href="#projects" className={clsx("max-sm:hidden", hash === '#projects' ? 'text-primary' : '')}>
                    Projetos
                </Link>
                <Link href="#about" className={clsx("max-sm:hidden", hash === '#about' ? 'text-primary' : '')}>
                    Sobre mim
                </Link>
                <Link href="#contact" className={clsx("max-sm:hidden", hash === '#contact' ? 'text-primary' : '')}>
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
