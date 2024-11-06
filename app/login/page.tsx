import { FormLogin } from '@/components/form-login'
import React from 'react'
import { AiFillCode } from 'react-icons/ai'
import { BiLogoGraphql } from 'react-icons/bi'
import { FaAngular, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa'
import { RiJavascriptLine, RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiCss3, SiNestjs } from 'react-icons/si'

export default function Login() {
  return (
    <div className='w-full h-screen max-h-screen overflow-hidden flex'>
      <div className='w-full flex flex-col items-center justify-center flex-1 max-md:px-8 max-md:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 from-5% via-zinc-950 via-65%  to-zinc-950 to-90%'>
        <div className='w-full flex flex-col justify-center items-center mb-8 -mt-24 md:hidden'>
          <h1 className="uppercase font-extrabold flex gap-1 items-center">
            <AiFillCode className="fill-primary" size={18} />
            <span className="mt-[2px] text-white">
              Augusto Sousa
            </span>
          </h1>
          <h1 className="font-bold text-white text-sm">Desenvolverdor Full Stack</h1>
        </div>

        <h1 className="text-3xl max-md:text-xl font-bold">Olá! Augusto Sousa</h1>
        <p className="text-zinc-400 mb-5 text-justify max-md:text-sm max-w-md">
          faça o login para acessar as messagens deixadas para você!
        </p>

        <div className='w-full max-w-md'>
          <FormLogin />
        </div>
      </div>

      <div className='max-md:hidden flex flex-col flex-1 text-primary/60 w-full items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 from-5% via-zinc-950 via-65%  to-zinc-950 to-90%'>
        <div className='w-full flex flex-col justify-center items-center'>
          <h1 className="uppercase text-3xl font-extrabold flex gap-1 items-center">
            <AiFillCode className="fill-primary" size={32} />
            <span className="mt-[2px] text-white">
              Augusto Sousa
            </span>
          </h1>
          <h1 className="font-bold text-white text-lg">Desenvolverdor Full Stack</h1>
        </div>
        <div className='flex w-full gap-4 items-center justify-center'>
          <FaReact size={60} className='-mt-20' />
          <FaNodeJs size={40} className='mt-28 -ml-8' />
          <RiTailwindCssFill size={40} className='-ml-6' />
          <RiJavascriptLine size={95} className='mt-4' />
          <FaPhp size={45} className='-mt-12' />
          <FaAngular size={50} />
          <SiNestjs size={65} className='mt-28 -ml-12' />
          <BiLogoGraphql size={60} />
          <SiCss3 size={65} className='-mt-10' />
          <RiNextjsFill size={85} className='mt-32' />
        </div>
      </div>
    </div>
  )
}
