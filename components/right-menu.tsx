'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { Button } from "./ui/button";


export default function RightMenun() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' variant='ghost'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <aside className="flex flex-col items-center justify-between h-full w-full">
                    <div className="flex flex-col gap-4">
                        <Link href="#home" >
                            Home
                        </Link>
                        <Link href="#projects" >
                            Projetos
                        </Link>
                        <Link href="#about" >
                            Sobre mim
                        </Link>
                        <Link href="#contact" >
                            Contato
                        </Link>
                    </div>

                    <div className="flex gap-4">
                        <BsLinkedin />
                        <BsGithub />
                        <BsInstagram />
                    </div>
                </aside>
            </SheetContent>
        </Sheet>

    )
}