import ButtonDownloadResume from "@/components/button-download-resume";

export default function About() {
    return (
        <section id="about" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 overflow-x-hidden">
            <div className="flex max-md:flex-col w-full max-sm:mt-20 mt-28">
                <div className="w-full space-y-2">
                    <h1 className="font-bold text-3xl uppercase">Sobre mim</h1>
                    <ButtonDownloadResume/>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h2 className="font-bold text">
                        Olá! Meu nome é Augusto Sousa, sou desenvolvedor fullstack
                    </h2>

                    <p className="text-zinc-400 text-justify">
                        Natural de Belém - PA, sou bacharel em Sistemas de Informação. Sempre fui fascinado pela experiência do usuário e pela estética das interfaces, o que me levou a um grande interesse pelo front-end. Ao longo do tempo, também desenvolvi um apreço pelo back-end e pela robustez das soluções que ele proporciona. Por isso, optei por ser fullstack, para atuar em todas as camadas de desenvolvimento e entregar soluções completas e integradas.

                        Sempre estou em busca de aprimorar minhas habilidades e de novos desafios para criar produtos inovadores e funcionais.
                    </p>
                </div>
            </div>
        </section>
    )
}