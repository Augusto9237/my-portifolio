import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "../globals.css"
import Projects from "./@projects/page";
import Home from "./@home/page";
import { Separator } from "@/components/ui/separator";
import About from "./@about/page";
import Contact from "./@contact/page";
import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import RightMenun from "@/components/right-menu";
import { AiFillCode } from "react-icons/ai";

const oxanium = Oxanium({
  weight: ['400', '600', "800"],
  subsets: ["latin"],
  style: ["normal"]
})

export const metadata: Metadata = {
  title: "Augusto Sousa",
  description: "Desenvolvedor Front-End",
};

export default function RootLayout() {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${oxanium.className} antialiased bg-zinc-950`}
      >
        <div className="relative flex flex-1 h-full flex-col w-full overflow-hidden">
          <header className="h-[70px] w-full max-sm:px-4  text-zinc-200 items-center flex justify-center fixed top-0 left-0 right-0 bg-zinc-950/50 backdrop-blur-md  z-10">
            <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
              <h1 className="uppercase text-lg font-semibold flex gap-2 items-center">
                <AiFillCode className="fill-primary" size={20} />
                <span className="mt-[1.5px]">
                  Augusto Sousa
                </span>
              </h1>
              <Link href="#home" className="max-sm:hidden">
                Home
              </Link>
              <Link href="#projects" className="max-sm:hidden">
                Projetos
              </Link>
              <Link href="#about" className="max-sm:hidden">
                Sobre mim
              </Link>
              <Link href="#contact" className="max-sm:hidden">
                Contato
              </Link>

              <div className="flex gap-4 max-sm:hidden">
                <BsLinkedin />
                <BsGithub />
                <BsInstagram />
              </div>
            </div>

            <div className="md:hidden">
              <RightMenun />
            </div>
          </header>

          <Home />
          <Separator className="bg-zinc-600" />
          <Projects />
          <Separator className="bg-zinc-600" />
          <About />
          <Separator className="bg-zinc-600" />
          <Contact />

          <footer className="absolute w-full p-5 mx-auto text-center bottom-0">
            <span className="text-zinc-400 text-sm">
              @ 2024 Augusto Sousa
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
