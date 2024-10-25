import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import { AiFillCode } from "react-icons/ai";

const oxanium = Oxanium({
    weight: ['400', '600', "800"],
    subsets: ["latin"],
    style: ["normal"]
})

export const metadata: Metadata = {
    title: "Augusto Sousa - Admin",
    description: "Desenvolvedor Front-End",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${oxanium.className} antialiased bg-zinc-950`}
            >   <div className="flex min-h-screen flex-col  max-w-screen-lg mx-auto relative pt-[70px]">
                    <header className="text-zinc-200 h-[70px] w-full items-center flex fixed top-0 left-0 right-0 bg-zinc-950/50 backdrop-blur-md  z-10">
                        <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto p-5">
                            <div className="flex gap-5 items-center">
                                <h1 className="uppercase text-lg font-semibold flex gap-2 items-center">
                                    <AiFillCode className="fill-primary" size={20} />
                                    Augusto Sousa
                                </h1>
                                <Link href="/messages" >
                                    Mensagens
                                </Link>
                                <Link href="/project" >
                                    Projetos
                                </Link>
                            </div>
                            <Link href="/profile" >
                                Perfil
                            </Link>
                        </div>
                    </header>

                    {children}
                    <footer className="max-w-screen-lg mx-auto w-full p-5">
                        <span className="text-zinc-400 text-sm">
                            @ 2024 Augusto Sousa
                        </span>
                    </footer>
                </div>
            </body>
        </html>
    );
}
