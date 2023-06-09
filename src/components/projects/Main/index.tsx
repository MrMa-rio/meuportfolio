import Image from "next/image"
import { Tailwind, Javascript, Html, Css, CSharp, Typescript, ReactJs } from "./imports"
import { tailwindB,javascriptB,htmlB,csharpB,cssB,typescriptB,reactB, tailwindW, javascriptW, htmlW, cssW, csharpW, typescriptW, reactW } from "components/iconsLinguage/icons"
import { AboutMe } from "components/AboutMe"

export const MainProject = (props:{typeLP:string,darkMode:any})=>{
    return(
        <div className="thumbImages bg-secondary dark:bg-dark-secondary w-full py-20 mini-tela:py-72 flex justify-center items-center ">
            <div className=" bg-black w-full mxl:w-3/4 h-fit ssm:px-5 mini-tela:px-16 bg-opacity-5 rounded-md">
                <div className="relative py-4 flex justify-between items-center ">
                    <h1 className=" text-opacity-50 text-3xl text-white font-bold">{props.typeLP}</h1>
                    {props.typeLP == "Tailwind" ? <Image src={ props.darkMode != "dark" ? tailwindB : tailwindW} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "Javascript" ? <Image src={ props.darkMode != "dark" ? javascriptB : javascriptW} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "Html" ? <Image src={ props.darkMode != "dark" ? htmlB : htmlW} className="w-20 opacity-50" alt={props.typeLP} />  : <></>}
                    {props.typeLP == "Css" ? <Image src={ props.darkMode != "dark" ? cssB : cssW} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "CSharp" ? <Image src={ props.darkMode != "dark" ? csharpB : csharpW} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "Typescript" ? <Image src={ props.darkMode != "dark" ? typescriptB : typescriptW} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "ReactJs" ? <Image src={ props.darkMode != "dark" ? reactB : reactW} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                </div>
                <div className=" flex justify-center items-center ">
                    {props.typeLP == "Tailwind" ? <Tailwind /> : <></>}
                    {props.typeLP == "Javascript" ?  <Javascript /> : <></>}
                    {props.typeLP == "Html" ?  <Html /> : <></>}
                    {props.typeLP == "Css" ?  <Css /> : <></>}
                    {props.typeLP == "CSharp" ?  <CSharp /> : <></>}
                    {props.typeLP == "Typescript" ?  <Typescript /> : <></>}
                    {props.typeLP == "ReactJs" ?  <ReactJs /> : <></>}
                    {props.typeLP == "Sobre Mim" ?  <AboutMe /> : <></>}

                </div>
            </div>
         </div>
    )
}