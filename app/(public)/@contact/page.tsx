import { FormContactMe } from "@/components/form-contact-me";
import { Mail } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 overflow-x-hidden">
            <div className="flex max-md:flex-col w-full max-sm:mt-20 mt-28">
                <div className="w-full">
                    <h1 className="font-bold max-md:text-2xl text-3xl uppercase">Entre em contato</h1>
                    <p className="text-zinc-400 text-justify flex gap-2">
                        <Mail size={18} className="mt-1"/>
                        augusto.souza8330@gmail.com
                    </p>

                    <p className="text-zinc-400 text-justify flex gap-2">
                        <BsWhatsapp size={18} className="mt-1" />
                        (91) 98330-2732
                    </p>
                </div>

                <div className="w-full max-md:pt-4">
                    <FormContactMe />
                </div>
            </div>
        </section>
    )
}