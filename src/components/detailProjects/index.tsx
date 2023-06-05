import { Icon } from "components/iconsLinguage/icons"
import { MultiColor } from "components/multColor"
import Image from "next/image"
import { useState } from "react"

export const DetailProject = (props:{ project:Icon}) =>{
    const [showWords, setShowWords] = useState(false)
    const toggleWords = () =>{
        setShowWords(!showWords)
    }
    return(
        <div id="detailProject" className= " hidden w-full p-1 mini-tela:flex justify-center items-center gap-10 ">
            <div className=" w-full h-fit mini-tela:w-1/2 bg-secondary dark:bg-dark-terciary bg-opacity-40 flex flex-col justify-center rounded-md ">
                <MultiColor />
                <div className="px-3">
                    <h1 className="mini-tela:text-2xl xl:text-4xl font-semibold dark:text-white dark:text-opacity-60">{props.project.title}</h1>
                    <p className={`w-full ${showWords ? "h-fit":"h-48"} shadow-inner_buttom p-1 overflow-y-clip font-roboto text-2xl text-white dark:text-opacity-60 bg-opacity-60 `}>{props.project.description}</p>
                    <a onClick={toggleWords} className="cursor-pointer text-black dark:text-white dark:font-semibold text-opacity-70">{showWords ? "Ler menos.." : "Ler mais.."}</a>             

                    <div className="flex justify-between items-center">
                        <div className='flex gap-3 text-white font-semibold py-2'>
                            {props.project.site ? <a target="_blank" href={props.project.site}><button className='bg-quartenary bg-opacity-60 hover:bg-opacity-80 dark:bg-opacity-60 dark:hover:bg-opacity-80 dark:bg-dark-quartenary p-1 rounded-md'><p>Acessar Site</p></button></a> : <></>}
                            {props.project.codigo ? <a target="_blank" href={props.project.codigo}><button className='bg-quartenary bg-opacity-60 hover:bg-opacity-80 dark:bg-opacity-60 dark:hover:bg-opacity-80 dark:bg-dark-quartenary p-1 rounded-md'> <p>Ver Código</p></button></a> : <></>}
                        </div>
                        <div className="flex">
                            {Object.keys(props.project.Icon).map((result) => <Image key={Math.floor(Math.random() * 1000)}  src={props.project.Icon[result].icon} alt={props.project.Icon[result].alt} className="w-10 dark:brightness-75" /> )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-fit flex justify-center items-center p-5 ">
                <Image src={props.project.poster} alt={props.project.title} className="w-56 rounded-md shadow-lg rotate-6 shadow-dark-terciary dark:brightness-50 dark:hover:brightness-75 " />
            </div>
        </div>
    )
}

export const DetailProjectMobile = (props:{ project:Icon}) =>{

    const [showWords, setShowWords] = useState(false)
    const toggleWords = () =>{
        setShowWords(!showWords)
    }

    return(
        <div id="detailProject" className="w-full flex justify-center" >
            <div className="w-4/5 bg-terciary dark:bg-dark-terciary bg-opacity-20 flex flex-col rounded-lg">
                <MultiColor />
                    <div className="p-3">
                        <p className={`${ showWords ? "h-fit" : "h-20"}  overflow-y-clip text-lg text-white dark:text-opacity-60 `}>{props.project.description}</p>
                        <a onClick={toggleWords} className="cursor-pointer text-black dark:text-white dark:font-semibold text-opacity-70">{showWords ? "Ler menos.." : "Ler mais.."}</a>             
                        <div className='flex gap-3 text-white font-semibold py-2'>
                            {props.project.site ? <a target="_blank" href={props.project.site}><button className='bg-quartenary bg-opacity-60 hover:bg-opacity-80 dark:bg-opacity-60 dark:hover:bg-opacity-80 dark:bg-dark-quartenary p-1 rounded-md'><p>Acessar Site</p></button></a> : <></>}
                            {props.project.codigo ? <a target="_blank" href={props.project.codigo}><button className='bg-quartenary bg-opacity-60 hover:bg-opacity-80 dark:bg-opacity-60 dark:hover:bg-opacity-80 dark:bg-dark-quartenary p-1 rounded-md'> <p>Ver Código</p></button></a> : <></>}
                        </div>
                    </div>
            </div>
        </div>
    )
}


/**
    Fazer um sobre mim, 
    criar um carregamento naas imagens, 
    olhar todo o codigo e limpar

 */