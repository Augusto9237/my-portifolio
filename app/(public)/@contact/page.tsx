import { FormContactMe } from "@/components/form-contact-me";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen text-white flex flex-col w-full max-w-screen-lg mx-auto max-md:px-4 max-md:mt-5 overflow-x-hidden">
            <div className="flex max-md:flex-col w-full max-sm:mt-20 mt-28">
                <div className="w-full">
                    <h1 className="font-bold text-3xl uppercase">Let’s connect</h1>
                    <p>Say hello at robertgarcia@gmail.com</p>
                </div>

                <div className="w-full max-md:pt-4">
                    <FormContactMe />
                </div>
            </div>
        </section>
    )
}