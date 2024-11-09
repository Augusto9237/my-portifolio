import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "../globals.css"
import Projects from "./@projects/page";
import Home from "./@home/page";
import { Separator } from "@/components/ui/separator";
import About from "./@about/page";
import Contact from "./@contact/page";


import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { Header } from "@/components/header";

const oxanium = Oxanium({
  weight: ['400', '600', "800"],
  subsets: ["latin"],
  style: ["normal"]
})

export const metadata: Metadata = {
  title: "Augusto Sousa",
  description: "Desenvolvedor Full Stack",
};

export default function RootLayout() {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${oxanium.className} antialiased bg-zinc-950`}
      >
        <ToastContainer />
        <div className="relative flex flex-1 h-full flex-col w-full overflow-hidden">
       <Header/>

          <Home />
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
      </body>
    </html>
  );
}
