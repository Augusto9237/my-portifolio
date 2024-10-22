import { CarouselSkills } from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Home() {
    return (
        <section id="home" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto ">
            <header className="h-[70px] w-full  text-zinc-200 items-center flex justify-center">
                <div className="flex items-center justify-between w-full">
                    <Link href="#home" >
                        Home
                    </Link>
                    <Link href="#projects" >
                        Projetos
                    </Link>
                    <Link href="#about" >
                        Sobre mim
                    </Link>
                    <Link href="#contact" >
                        Contato
                    </Link>

                    <div className="flex gap-4">
                        <BsLinkedin />
                        <BsGithub />
                        <BsInstagram />
                    </div>
                </div>

            </header>

            <main className="flex mx-auto w-full max-w-screen-lg h-full flex-1 items-center justify-center">
                <div className="w-full space-y-5">
                    <h1 className="text-3xl font-bold">Your Name Here</h1>
                    <p className="text-zinc-300 text-[14px]">
                        ntro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <Button className="bg-emerald-600 hover:bg-emerald-700 py-2.5 px-10 rounded-md border border-emerald-500 font-semibold">
                        Let’s get started
                    </Button>

                </div>
                <div className="w-full flex justify-center">
                    <Image src="https://github.com/Augusto9237.png" alt="avatar" width={350} height={350} className="rounded-full" />
                </div>
            </main>

            <footer className="max-w-screen-lg w-full mx-auto space-y-4 pb-8">
                <h2>Tecnologias</h2>
                <CarouselSkills />

            </footer>
        </section>
    )
}