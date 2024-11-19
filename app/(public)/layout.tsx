import type { Metadata } from "next";
import { Oxanium } from "next/font/google";
import "../globals.css"

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import { ContainerPage } from "@/components/container-page";

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
        <ContainerPage />
      </body>
    </html>
  );
}
