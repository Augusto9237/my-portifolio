'use client'
import * as React from "react"
import AutoScroll from "embla-carousel-auto-scroll"

import { BiLogoTypescript } from "react-icons/bi";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFirebaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiGraphql, SiPrisma } from "react-icons/si";


import {
    Carousel,
    CarouselContent,
    CarouselItem,
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
                AutoScroll({
                    speed: 0.5,
                    startDelay: 0,
                    stopOnInteraction: false
                })
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="scroll-smooth">
                {skills.map((item, index) => (
                    <CarouselItem key={index} className="max-w-[200px] w-full  flex">
                        <div className="border border-zinc-400 text-zinc-400 text-[14px] p-2 rounded-md flex items-center justify-center gap-2 w-full">
                            {item === "React.js" && <>
                                <FaReact />
                                ReactJs
                            </>
                            }
                            {item === "ReactNative.js" && <>
                                <FaReact />
                                ReactNativeJs
                            </>}
                            {item === "Next.js" && <>
                                <RiNextjsFill />
                                NextJs
                            </>}
                            {item === "TailwindCss" && <>
                                <RiTailwindCssFill />
                                TailwindCss
                            </>}
                            {item === "Node.js" && <>
                                <FaNodeJs />
                                NodeJs
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
                                AngularJs
                            </>}
                        </div>
                        <div className="w-4  h-full" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="bg-gradient-to-r from-zinc-950 to-zinc-200/0 w-14 absolute top-0 left-0 bottom-0" />
            <div className="bg-gradient-to-l from-zinc-950 to-zinc-200/0 w-12 absolute top-0 right-0 bottom-0" />
        </Carousel>
    )
}
