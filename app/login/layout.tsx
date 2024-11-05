import '../globals.css'
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({
  weight: ['400', '600', "800"],
  subsets: ["latin"],
  style: ["normal"]
})

export const metadata = {
  title: 'Augusto Sousa - Login',
  description: 'Desenvolvedor Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${oxanium.className} antialiased bg-zinc-950 relative`}>
        {children}
        <footer className="absolute w-full p-5 mx-auto text-center bottom-0">
          <span className="text-zinc-400 text-sm">
            ©2024 Augusto Sousa
          </span>
        </footer>
      </body>
    </html >
  )
}
