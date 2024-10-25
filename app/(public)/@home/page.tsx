import { CarouselSkills } from "@/components/carrousel-skills";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
    return (
        <section id="home" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5">
            <main className="flex max-md:flex-col max-md:gap-5 w-full flex-1 items-center justify-center ">
                <div className="w-full space-y-5 flex flex-col">
                    <h1 className="text-3xl font-bold">Your Name Here</h1>
                    <p className="text-zinc-300 text-[14px]">
                        ntro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <Button className="max-sm:w-full">
                        Let’s get started
                    </Button>

                </div>
                <div className="w-full flex justify-center">
                    <Image src="https://github.com/Augusto9237.png" alt="avatar" width={350} height={350} className="rounded-full" />
                </div>
            </main>

            <footer className="max-w-screen-lg w-full mx-auto space-y-4 pb-8">
                <h2>Tecnologias</h2>
                <CarouselSkills />

            </footer>
        </section>
    )
}