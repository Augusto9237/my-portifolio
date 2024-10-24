import { CarouselProject } from "@/components/carrousel-projects";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";

export default function Projects() {
    return (
        <section id="projects" className="h-full min-h-screen text-white">
            <header className="flex flex-col gap-2 justify-center mt-28">
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
    )
}