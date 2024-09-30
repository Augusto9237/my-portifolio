import { CarouselProject } from "@/components/carrousel-projects";
import { CarouselSkills } from "@/components/carrousel-skills";
import { FormContactMe } from "@/components/form-contact-me";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGraphql, SiPrisma } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 ">
      <section className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto ">
        <header className="h-[70px] w-full  text-zinc-200 items-center flex justify-center">
          <div className="flex items-center justify-between w-full">
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

      <Separator className="bg-zinc-600"/>

      <section className="h-full min-h-screen text-white">
        <header className="flex flex-col gap-2 justify-center mt-28 w-full max-w-screen-lg mx-auto">
          <h1 className="font-bold text-3xl uppercase">Featured Projects</h1>
          <p className="text-zinc-500">
            Here are some of the selected projects that showcase my passion for front-end development.
          </p>
        </header>

        <main className="flex flex-col w-full max-w-screen-lg mx-auto mt-8 gap-8">
          <div className="flex w-full gap-8">
            <div className="p-5 flex-1 flex flex-col bg-zinc-800 overflow-hidden justify-center rounded-md">
              <span className=" bg-zinc-950 text-white text-[14px]  px-4 py-1 max-w-fit rounded-xl mb-5">
                Ecommerce
              </span>
              <div className="px-4">
                <CarouselProject />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-8 justify-center">
              <h2 className="text-3xl font-semibold">Promotional landing page for our favorite show</h2>

              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <div className="text-sm text-zinc-400">
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

              <div className="flex gap-5 items-center">
                <Link href="/" className="flex gap-2 text-bold items-center text-emerald-500">
                  <span className="leading-tight">
                    LIVE DEMO
                  </span>
                  <SquareArrowOutUpRight size={17} />
                </Link>

                <Link href="/" className="flex gap-2 text-bold items-center text-emerald-500">
                  <span className="leading-tight">
                    SEE ON GITHUB
                  </span>
                  <BsGithub size={17} />
                </Link>
              </div>
            </div>

          </div>

        </main>
      </section>

      <Separator className="bg-zinc-600"/>

      <section className="h-full min-h-screen text-white w-full max-w-screen-lg mx-auto">
        <div className="flex w-full mt-28">
          <div className="w-full">
            <h1 className="font-bold text-3xl uppercase">About me</h1>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bold text">
              I am a front-end developer based in Sydney. Has Mechanical Engineering background.
            </h2>

            <p className="text-zinc-400">
              I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-zinc-600"/>

      <section className="h-full min-h-screen text-white w-full max-w-screen-lg mx-auto">
        <div className="flex w-full mt-28">
          <div className="w-full">
            <h1 className="font-bold text-3xl uppercase">Let’s connect</h1>
            <p>Say hello at robertgarcia@gmail.com</p>
            <p>For more info, here’s my resume</p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <FormContactMe/>
          </div>
        </div>
      </section>
    </div>
  );
}
