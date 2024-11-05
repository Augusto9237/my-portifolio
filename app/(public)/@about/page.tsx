import ButtonDownloadResume from "@/components/button-download-resume";

export default function About() {
    return (
        <section id="about" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 overflow-x-hidden">
            <div className="flex max-md:flex-col w-full max-sm:mt-20 mt-28">
                <div className="w-full flex flex-col gap-4">
                    <h1 className="font-bold text-3xl uppercase">Sobre mim</h1>
                    <div className="max-md:hidden">
                        <ButtonDownloadResume />
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h2 className="font-bold text">
                        Olá! Meu nome é Augusto Sousa, sou desenvolvedor fullstack
                    </h2>

                    <p className="text-zinc-400 text-justify">
                        Sou bacharel em Sistemas de Informação e sempre fui fascinado pela experiência do usuário e pela estética das interfaces, o que despertou meu interesse pelo front-end. Com o tempo, desenvolvi também uma forte afinidade com o back-end, apreciando a robustez e eficiência que ele proporciona. Por isso, escolhi me especializar como desenvolvedor fullstack, atuando em todas as camadas do desenvolvimento para entregar soluções completas e integradas.<br/>

                        Estou constantemente aprimorando minhas habilidades e buscando novos desafios que me permitam criar produtos inovadores, funcionais e impactantes.
                    </p>
                </div>
                <div className="md:hidden w-full flex flex-col mt-4">
                    <ButtonDownloadResume />
                </div>
            </div>
        </section>
    )
}