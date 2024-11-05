import { CarouselProject } from "@/components/carrousel-projects";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaAws, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiMercadopago } from "react-icons/si";

const projectsImages = [
    {
        id: "1",
        images: [
            "https://tdpicjcnerrhbfxjnwjp.supabase.co/storage/v1/object/sign/assets/tela-inicial.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdGVsYS1pbmljaWFsLnBuZyIsImlhdCI6MTczMDgwOTcyNCwiZXhwIjoxNzYyMzQ1NzI0fQ.k2bK4sfSSIRbu6I8qLPVLlYhOBx6E58p38_7EeKRqSQ&t=2024-11-05T12%3A28%3A45.083Z",
            "https://tdpicjcnerrhbfxjnwjp.supabase.co/storage/v1/object/sign/assets/tela-detalhes.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdGVsYS1kZXRhbGhlcy5wbmciLCJpYXQiOjE3MzA4MDk3OTgsImV4cCI6MTc2MjM0NTc5OH0.1-nqhkb4wYRN6bU82sDwxS_JnDX5sXKvZodOeN7wJ24&t=2024-11-05T12%3A29%3A59.340Z",
            "https://tdpicjcnerrhbfxjnwjp.supabase.co/storage/v1/object/sign/assets/tela-carrinho.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdGVsYS1jYXJyaW5oby5wbmciLCJpYXQiOjE3MzA4MDk5MTQsImV4cCI6MTc2MjM0NTkxNH0.uk7hZOCVexQ9XpteFNtz57kqttkFtvhZrvp7f642Tzk&t=2024-11-05T12%3A31%3A55.345Z",
            "https://tdpicjcnerrhbfxjnwjp.supabase.co/storage/v1/object/sign/assets/tela-checkout.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdGVsYS1jaGVja291dC5wbmciLCJpYXQiOjE3MzA4MDk5MzIsImV4cCI6MTc2MjM0NTkzMn0.IzIYxDI8B4pv4QxGiSG3vFARFovcrc9wxcndpG7lDYk&t=2024-11-05T12%3A32%3A13.092Z",
            "https://tdpicjcnerrhbfxjnwjp.supabase.co/storage/v1/object/sign/assets/tela_dashboard.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvdGVsYV9kYXNoYm9hcmQucG5nIiwiaWF0IjoxNzMwODA5OTYwLCJleHAiOjE3NjIzNDU5NjB9.snnfR-_3va5id_7eGVSf7g3XqT28vG_h083AR0Ot6uM&t=2024-11-05T12%3A32%3A41.768Z"
        ]
    },
]

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 overflow-x-hidden">
            <header className="flex flex-col gap-2 justify-center max-sm:mt-20 mt-28 ">
                <h1 className="font-bold text-3xl uppercase">Featured Projects</h1>
                <p className="text-zinc-500">
                    Here are some of the selected projects that showcase my passion for front-end development.
                </p>
            </header>

            <main className="flex flex-col w-full py-8 gap-8">
                <div className="flex max-md:flex-col w-full gap-8">
                    <div className="p-4 flex-1 flex flex-col bg-zinc-800 overflow-hidden justify-center rounded-md">
                        <span className=" bg-zinc-950 text-white text-[14px] ml-2 px-4 py-1  rounded-xl mb-5 min-w-fit max-w-fit text-nowrap">
                            E-commerce
                        </span>
                        <div className="max-md:px-2 px-3.5">
                            <CarouselProject images={projectsImages[0].images} />
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-5 justify-center">
                        <h2 className="max-md:text-2xl text-3xl font-semibold">Auto Tech – Som e Eletrônicos Automotivos</h2>

                        <p className="text-zinc-400 max-md:text-justify">
                            O Auto Tech é um e-commerce especializado em acessórios, som e eletrônicos automotivos, desenvolvido por mim, utilizando tecnologias modernas e escaláveis.<br />
                            Funcionalidades:
                            Catálogo de produtos por categorias.
                            Carrinho de compras com cálculo de frete.
                            Checkout seguro com Mercado Pago.
                            Painel administrativo para gerenciamento de produtos e pedidos.
                        </p>
                        <div className="text-sm text-zinc-400">
                            <span>Tecnologias utilizadas:</span>
                            <div className="flex gap-3 flex-wrap">
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
                                <span className="flex gap-1 items-center">
                                    <FaAws />
                                    S3
                                </span>

                                <span className="flex gap-1 items-center">
                                    <SiMercadopago />
                                    Mercado Pago
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-5 items-center mt-5">
                            <Link href="https://auto-tech-store.vercel.app" target="_blank" className="flex gap-2 text-bold items-center text-primary">
                                <span className="leading-tight mt-[2px]">
                                    LIVE DEMO
                                </span>
                                <SquareArrowOutUpRight size={17} />
                            </Link>

                            <Link href="https://github.com/Augusto9237/auto-tech-store" target="_blank" className="flex gap-2 text-bold items-center text-primary">
                                <span className="leading-tight mt-[2px]">
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