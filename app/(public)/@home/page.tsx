import { CarouselSkills } from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <section id="home" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 from-10% via-zinc-950 via-65%  to-zinc-950 to-90%">
            <main className="flex max-md:flex-col max-md:gap-5 gap-12 w-full flex-1 items-center justify-center">
                <div className="max-sm:pt-20 max-md:mb-5 w-full flex flex-col">

                    <div className="flex flex-col">
                        <span className="">Olá! Meu nome é <span className="font-bold">Augusto Sousa</span> e eu sou</span>
                        <h1 className="max-md:text-2xl text-3xl font-bold uppercase">Desenvolverdor Full Stack</h1>
                    </div>
                    <p className="text-zinc-400 mb-5 text-justify">
                        Unindo estética e performance: do front-end ao back-end, desenvolvo soluções integradas que transformam ideias em experiências completas.
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
                    <Image src="https://github.com/Augusto9237.png" alt="avatar" width={350} height={350} className="rounded-lg w-full" />
                </div>
            </main>

            <footer className="max-w-screen-lg w-full mx-auto space-y-4 max-md:pt-8 pb-8">
                <h2 className="font-semibold">Habilidades</h2>
                <CarouselSkills />

            </footer>
        </section>
    )
}