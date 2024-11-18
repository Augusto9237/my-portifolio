'use client'
import Home from "@/app/(public)/@home/page";
import { Header } from "./header";
import { Separator } from "./ui/separator";
import Projects from "@/app/(public)/@projects/page";
import About from "@/app/(public)/@about/page";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Contact from "@/app/(public)/@contact/page";

export function ContainerPage() {
    const home = useRef(null);
    const params = useParams()
    const [hash, setHash] = useState('');
    const [visibleDivId, setVisibleDivId] = useState('');


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Se a div está visível, atualizar o id no estado
                        setVisibleDivId(entry.target.id);
                    }
                });
            },
            {
                root: null, // null significa que usa o viewport da janela
                rootMargin: '0px',
                threshold: 0.5, // A div é considerada visível quando 50% dela estiver visível
            }
        );

        const homeDiv = home.current;
        if (homeDiv) {
            observer.observe(homeDiv); // Começa a observar a div
        }


        return () => {
            if (homeDiv) {
                observer.unobserve(homeDiv);
            }
        };
    }, [home]);

    return (
        <div className="relative flex flex-1 h-full min-h-screeen flex-col w-full overflow-hidden">
            <Header hash={visibleDivId} />
            <div ref={home} id="home">
                <Home />
            </div>
            <Separator className="bg-zinc-700" />
            <Projects />
            <Separator className="bg-zinc-700" />
            <About />
            <Separator className="bg-zinc-700" />
            <Contact />

            <footer className="absolute w-full p-5 mx-auto text-center bottom-0">
                <span className="text-zinc-400 text-sm">
                    ©Todos os Diretos Reservados - Augusto Sousa
                </span>
            </footer>
        </div>
    )
}