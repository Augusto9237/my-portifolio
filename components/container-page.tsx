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
    const projects = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);

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
        const projectsDiv = projects.current;
        const aboutDiv = about.current;
        const contactDiv = contact.current;

        if (homeDiv) {
            observer.observe(homeDiv); // Começa a observar a div
        }

        if (projectsDiv) {
            observer.observe(projectsDiv); // Começa a observar a div
        }

        if (aboutDiv) {
            observer.observe(aboutDiv); // Começa a observar a div
        }

        if (contactDiv) {
            observer.observe(contactDiv); // Começa a observar a div
        }



        return () => {
            if (homeDiv) {
                observer.unobserve(homeDiv);
            }
            if (projectsDiv) {
                observer.unobserve(projectsDiv);
            }
            if (aboutDiv) {
                observer.unobserve(aboutDiv);
            }

            if (contactDiv) {
                observer.unobserve(contactDiv);
            }
        };
    }, [home, projects, about, contact]);

    return (
        <div className="relative flex flex-1 h-full min-h-screeen flex-col w-full overflow-hidden">
            <Header hash={visibleDivId} />
            <div ref={home} id="home">
                <Home />
            </div>

            <Separator className="bg-zinc-700" />

            <div ref={projects} id="projects">
                <Projects />
            </div>

            <Separator className="bg-zinc-700" />

            <div ref={about} id="about">
            <About />
            </div>

            <Separator className="bg-zinc-700" />

            <div ref={contact} id="contact">
            <Contact />
            </div>

            <footer className="absolute w-full p-5 mx-auto text-center bottom-0">
                <span className="text-zinc-400 text-sm">
                    ©Todos os Diretos Reservados - Augusto Sousa
                </span>
            </footer>
        </div>
    )
}