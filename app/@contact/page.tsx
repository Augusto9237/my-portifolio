import { FormContactMe } from "@/components/form-contact-me";

export default function Contact() {
    return (
        <section id="contact" className="h-full min-h-screen text-white w-full max-w-screen-lg mx-auto">
            <div className="flex w-full mt-28">
                <div className="w-full">
                    <h1 className="font-bold text-3xl uppercase">Let’s connect</h1>
                    <p>Say hello at robertgarcia@gmail.com</p>
                    <p>For more info, here’s my resume</p>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <FormContactMe />
                </div>
            </div>
        </section>
    )
}