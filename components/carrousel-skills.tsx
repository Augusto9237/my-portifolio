'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGraphql, SiPrisma } from "react-icons/si";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const skills = [
    "React.js",
    "ReactNative.js",
    "Next.js",
    "TailwindCss",
    "Node.js",
    "Prisma",
    "TypeScript",
    "Graphql",
    "Firebase",
    "Angular.js",
]

export function CarouselSkills() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="gap-4">
                {skills.map((item, index) => (
                    <CarouselItem key={index} className="max-w-[200px] animate-out">
                            <div className="border border-zinc-400 text-zinc-400 text-[14px] p-2 rounded-md flex items-center justify-center gap-2">
                                {item === "React.js" && <>
                                    <FaReact />
                                    React.js
                                </>
                                }
                                {item === "ReactNative.js" && <>
                                    <FaReact />
                                    ReactNative.js
                                </>}
                                {item === "Next.js" && <>
                                    <RiNextjsFill />
                                    Next.js
                                </>}
                                {item === "TailwindCss" && <>
                                    <RiTailwindCssFill />
                                    TailwindCss
                                </>}
                                {item === "Node.js" && <>
                                    <FaNodeJs />
                                    Node.js
                                </>}
                                {item === "Prisma" && <>
                                    <SiPrisma />
                                    Prisma
                                </>}
                                {item === "TypeScript" && <>
                                    <BiLogoTypescript />
                                    TypeScript
                                </>}
                                {item === "Graphql" && <>
                                    <SiGraphql />
                                    Graphql
                                </>}
                                {item === "Firebase" && <>
                                    <RiFirebaseFill />
                                    Firebase
                                </>}
                                {item === "Angular.js" && <>
                                    <FaAngular />
                                    Angular.js
                                </>}

                            </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
