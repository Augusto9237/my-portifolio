import ButtonDownloadResume from "@/components/button-download-resume";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function About() {
    return (
        <section id="about" className="min-h-screen relative text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 overflow-x-hidden">
            <h1 className="font-bold max-md:text-2xl text-3xl uppercase max-sm:mt-20 mt-28 mb-5">Sobre mim</h1>
            <div className="flex gap-8 max-md:flex-col w-full h-full relative">
                <div className="w-full flex flex-col h-full">
                    <h2 className="font-semibold">
                        Olá! Meu nome é Augusto Sousa, sou desenvolvedor Full Stack
                    </h2>

                    <p className="text-zinc-400 text-justify">
                        Sempre fui fascinado pela experiência do usuário e pela estética das interfaces, o que despertou meu interesse pelo front-end e mobile. Com o tempo, desenvolvi também uma forte afinidade com o back-end, apreciando a robustez e eficiência que ele proporciona. Por isso, escolhi me especializar como desenvolvedor Full Stack, atuando em todas as camadas do desenvolvimento para entregar soluções completas e integradas.<br />

                        Estou constantemente aprimorando minhas habilidades e buscando novos desafios que me permitam criar produtos inovadores, funcionais e impactantes.
                    </p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <h2>Formação</h2>
                    <p className="text-zinc-400 text-justify">
                        Graduado em Sistemas de Informação pela Universidade Mauricio de Nassau (UNINASSAU) em 2021.
                    </p>
                    <Separator className="bg-zinc-700" />
                    <h2>Conhecimento</h2>
                    <p className="text-zinc-400 text-justify">
                        ReactJs, React Native, NextJs, AngularJs, NodeJs, NestJs, JavaScript, TypeScript, Graphql, PHP, Prisma, Firebase, Docker, Github, HTML, CSS, TailwindCss e StyledComponents.
                    </p>

                </div>
                {/* <div className="md:hidden w-full flex flex-col mt-4">
                    <ButtonDownloadResume />
                </div> */}
            </div>
            <div className="flex gap-4 items-center absolute max-md:bottom-8 bottom-28 max-md:left-4 max-md:right-4">
                <ButtonDownloadResume />

                <Link href="https://www.linkedin.com/in/-augusto-sousaa" target="_blank" className="max-md:hidden">
                    <Button size="icon" variant="ghost">
                        <BsLinkedin />
                    </Button>
                </Link>

                <Link href="https://github.com/Augusto9237" target="_blank" className="max-md:hidden">
                    <Button size="icon" variant="ghost">
                        <BsGithub />
                    </Button>
                </Link>

                <Button size="icon" variant="ghost" className="max-md:hidden">
                    <BsInstagram />
                </Button>

            </div>
        </section>
    )
}