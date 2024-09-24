import { CarouselProject } from "@/components/carrousel-projects";
import { CarouselSkills } from "@/components/carrousel-skills";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGraphql, SiPrisma } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black ">
      <section className="min-h-screen text-white flex flex-col">
        <header className="bg-[#1B1B1B] h-[70px] w-full max-w-[1110px] mx-auto rounded-b-md text-zinc-200 items-center flex justify-center">
          <div className="flex items-center justify-between w-full max-w-screen-lg">
            <Link href="/" >
              Home
            </Link>
            <Link href="/about" >
              Projetos
            </Link>
            <Link href="/contact" >
              Trabalho recente
            </Link>

            <div>
              redes sociais
            </div>
          </div>

        </header>

        <main className="flex mx-auto w-full max-w-screen-lg h-full flex-1 items-center justify-center">
          <div className="w-full space-y-5">
            <h1 className="text-3xl font-bold">Your Name Here</h1>
            <p className="text-zinc-300 text-[14px]">
              ntro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-sky-600 py-2.5 px-10 rounded-md border border-sky-400">
              Let’s get started
            </button>
          </div>
          <div className="w-full flex justify-center">
            <Image src="https://github.com/Augusto9237.png" alt="avatar" width={350} height={350} className="rounded-full" />
          </div>
        </main>

        <footer className="max-w-screen-lg w-full mx-auto space-y-4 pb-8">
          <h2>Tecnologias</h2>
          <CarouselSkills/>
          
        </footer>
      </section>

      <section className="h-full min-h-screen text-white">
        <header className="flex flex-col gap-5 justify-center items-center mt-20 w-full max-w-screen-md mx-auto">
          <h1 className="font-bold text-3xl">Projetos</h1>
          <p className="text-zinc-500 text-[14px]">
            Solving user & business problems since last 15+ years.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        <main className="flex flex-col w-full max-w-screen-lg mx-auto mt-5 gap-8">
          <div className="flex w-full gap-5">
            <div className="flex-1 flex flex-col justify-center">
              <span className="bg-green-400/10 text-green-600 font-semibold px-4 max-w-fit rounded-md mb-5">
                Ecommerce
              </span>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Projeto 1</h2>

                <p className="text-zinc-500 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className="text-sm">
                  <span>Tecnologias utilizadas:</span>
                  <div className="flex gap-2">
                    <span className="flex gap-1 items-center">
                      <FaReact />
                      React.js
                    </span>
                    <span className="flex gap-1 items-center">
                      <RiNextjsFill />
                      Next.js
                    </span>
                    <span className="flex gap-1 items-center">
                      <RiTailwindCssFill />
                      TailwindCss
                    </span>
                    <span className="flex gap-1 items-center">
                      <FaNodeJs />
                      Node.js
                    </span>
                    <span className="flex gap-1 items-center">
                      <SiPrisma />
                      Prisma
                    </span>
                  </div>
                </div>

                <button className="bg-green-500 py-2.5 px-10 rounded-md border border-green-400 text-white font-semibold">
                  View project
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <CarouselProject />
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex-1 flex flex-col justify-center">
              <span className="bg-green-400/10 text-green-600 font-semibold px-4 max-w-fit rounded-md mb-5">
                Ecommerce
              </span>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Projeto 2</h2>

                <p className="text-zinc-500 text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <div className="text-sm">
                  <span>Tecnologias utilizadas:</span>
                  <div className="flex gap-2">
                    <span className="flex gap-1 items-center">
                      <FaReact />
                      React.js
                    </span>
                    <span className="flex gap-1 items-center">
                      <RiNextjsFill />
                      Next.js
                    </span>
                    <span className="flex gap-1 items-center">
                      <RiTailwindCssFill />
                      TailwindCss
                    </span>
                    <span className="flex gap-1 items-center">
                      <FaNodeJs />
                      Node.js
                    </span>
                    <span className="flex gap-1 items-center">
                      <SiPrisma />
                      Prisma
                    </span>
                  </div>
                </div>

                <button className="bg-green-500 py-2.5 px-10 rounded-md border border-green-400 text-white font-semibold">
                  View project
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <CarouselProject />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
