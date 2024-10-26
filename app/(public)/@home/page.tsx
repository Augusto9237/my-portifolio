import { CarouselSkills } from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import {ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <section id="home" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5">
            <main className="flex max-md:flex-col max-md:gap-5 w-full flex-1 items-center justify-center">
                <div className="max-sm:pt-20 w-full flex flex-col">

                    <div className="flex flex-col">
                        <span className="">Olá! Meu nome é <span className="font-bold">Augusto Sousa</span> e eu sou</span>
                        <h1 className="text-3xl font-bold">Desenvolverdor Full Stack</h1>
                    </div>

                    <p className="text-zinc-300 text-[14px] mb-5">
                        ntro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    
                    <Link href="#projects">
                        <Button className="max-sm:w-full gap-1 uppercase">
                            <div className="mt-[2px]">
                                Projetos
                            </div>
                            <ArrowRight size={18} />
                        </Button>
                    </Link>

                </div>
                <div className="w-full flex justify-center">
                    <Image src="https://github.com/Augusto9237.png" alt="avatar" width={350} height={350} className="rounded-lg" />
                </div>
            </main>

            <footer className="max-w-screen-lg w-full mx-auto space-y-4 max-md:pt-5 pb-8">
                <h2>Tecnologias</h2>
                <CarouselSkills />

            </footer>
        </section>
    )
}