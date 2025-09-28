import ButtonDownloadResume from "@/components/button-download-resume";
import { CarouselSkills } from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <section id="home" className="min-h-screen max-h-screen overflow-hidden text-white flex flex-col w-full max-w-screen-lg mx-auto max-xl:px-5 max-md:mt-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 from-10% via-zinc-950 via-65%  to-zinc-950 to-90%">
            <main className="flex max-md:flex-col max-md:gap-5 gap-12 w-full flex-1 items-center justify-center">
                <div className="max-sm:pt-14 max-md:mb-5 w-full flex flex-col">
                    <div className="flex flex-col">
                        <span className="">Olá! Meu nome é <span className="font-bold">Augusto Sousa</span> e eu sou</span>
                        <h1 className="max-md:text-2xl text-3xl font-bold uppercase mb-2">Desenvolverdor Full Stack</h1>
                    </div>
                    <p className="text-zinc-400 mb-5 text-justify">
                        Unindo estética e performance: do front-end ao back-end, desenvolvo soluções integradas que transformam ideias em experiências completas.
                    </p>
                    <div className="flex items-center gap-5 mt-5 w-full">
                        <Link href="#projects" className="max-md:w-full">
                            <Button className="w-full gap-1 uppercase">
                                <div className="mt-[2px]">
                                    Projetos
                                </div>
                                <ChevronRight size={18} />
                            </Button>
                        </Link>
                        <ButtonDownloadResume />
                    </div>

                </div>
                <div className="w-full flex justify-center overflow-hidden max-sm:max-h-[400px] max-md:max-h-[600px]">
                    <Image src="/perfil.png" alt="avatar" width={0} height={0} sizes='100vw' className="rounded-lg w-full  object-contain max-md:object-cover flex-1 mix-blend-lighten rounded-2xl" />
                </div>
            </main>

            <footer className="max-w-screen-lg w-full mx-auto space-y-4  pb-8">
                <h2 className="font-semibold">Principais habilidades</h2>
                <CarouselSkills />

            </footer>
        </section>
    )
}