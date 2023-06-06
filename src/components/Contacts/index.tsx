import { FileText, Github, Linkedin,Phone,Mail, Copy, Copyright } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
export const Contacts = () => {

    const email = "mario.marsn@gmail.com"
    const telefone = "(16) 9 9228-3546"
    const linkedin = "https://www.linkedin.com/in/marioalbertoneto/"
    const github = "https://github.com/MrMa-rio"
    const Curriculo = "https://github.com/MrMa-rio/meuportfolio/raw/main/src/assets/Documents/Curriculo%20Mario%202023.docx"
   
    const [download, setDownload] = useState(false)
    return(

        <div className="w-full h-96 bg-terciary dark:bg-dark-quartenary flex justify-center items-center">
            <div className="flex justify-center bg-secondary dark:bg-dark-quinary bg-opacity-60 rounded-lg items-center ssm:w-3/4 h-fit mini-tela:w-1/2 flex-col gap-2 p-3">
                <div className="w-fit pt-10 flex justify-center items-start flex-col dark:text-white dark:brightness-75 gap-3">
                    <div className='flex gap-2'>
                        <Phone className='rounded-full border border-black p-1' />
                        <a target='_blank' href="https://api.whatsapp.com/send?phone=16992283546">
                            <p>{telefone}</p>
                        </a>
                        <Copy className='cursor-pointer dark:stroke-white dark:brightness-95 hover:stroke-white dark:hover:stroke-dark-terciary hover:opacity-80' onClick={ () => navigator.clipboard.writeText(telefone)} /> 
                    </div>
                    <div className='flex gap-2'>
                        <Mail />
                        <a target='_blank' href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}>{email}</a>
                        <Copy className='cursor-pointer dark:stroke-white dark:brightness-95 hover:stroke-white dark:hover:stroke-dark-terciary hover:opacity-80' onClick={ () => navigator.clipboard.writeText(email)} /> 
                    </div>
                </div>
                 <hr className="bg-black brightness-50 w-64 h-1 border-none" />
                <div className=" flex justify-center items-center gap-7 p-4 w-3/4 hover:stroke-white">
                    <a target='_blank' href={github}>
                        <Github className=" w-10 h-10 dark:stroke-white dark:brightness-75 dark:hover:stroke-dark-terciary hover:stroke-white hover:opacity-80" />
                    </a>
                    <a target='_blank' href={linkedin} ><Linkedin className=" w-10 h-10 dark:stroke-white dark:brightness-75 dark:hover:stroke-dark-terciary hover:stroke-white hover:opacity-80" /></a>
                    <a onClick={() => setDownload(true)} ><FileText className=" w-10 h-10 dark:stroke-white dark:brightness-75 dark:hover:stroke-dark-terciary hover:stroke-white hover:opacity-80 cursor-pointer" /></a>              
                    {download ? <iframe className='hidden' src={Curriculo} ></iframe> : <></>}
                </div>
                <div className='flex gap-2 font-semibold'>
                    <Copyright />
                    <p> Mario Alberto 2023</p>
                </div>
            </div>
      </div>
    )
}