import Image from "next/image"
import { Tailwind, Javascript, Html, Css, CSharp, Python, ReactJs } from "./imports"
import { tailwindB,javascriptB,htmlB,csharpB,cssB,pythonB,reactB } from "components/iconsLinguage/icons"
export const MainProject = (props:{typeLP:string})=>{

    
    return(
        <div  className="bg-secondary dark:bg-dark-secondary h-screen flex justify-center items-center ">
            <div className="bg-black w-fit h-fit px-16 bg-opacity-5 rounded-md">
                <div className="py-4 flex justify-between items-center ">
                    <h1 className="capitalize text-opacity-50 text-3xl text-white font-bold">{props.typeLP}</h1>
                    {props.typeLP == "Tailwind" ? <Image src={tailwindB} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "Javascript" ? <Image src={javascriptB} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "Html" ? <Image src={htmlB} className="w-20 opacity-50" alt={props.typeLP} />  : <></>}
                    {props.typeLP == "Css" ? <Image src={cssB} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "CSharp" ? <Image src={csharpB} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "Python" ? <Image src={pythonB} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    {props.typeLP == "ReactJs" ? <Image src={reactB} className="w-20 opacity-50" alt={props.typeLP} /> : <></>}
                    
                </div>
                <div className=" flex justify-center items-center ">
                    {props.typeLP == "Tailwind" ? <Tailwind /> : <></>}
                    {props.typeLP == "Javascript" ?  <Javascript /> : <></>}
                    {props.typeLP == "Html" ?  <Html /> : <></>}
                    {props.typeLP == "Css" ?  <Css /> : <></>}
                    {props.typeLP == "CSharp" ?  <CSharp /> : <></>}
                    {props.typeLP == "Python" ?  <Python /> : <></>}
                    {props.typeLP == "ReactJs" ?  <ReactJs /> : <></>}
                </div>
            </div>
         </div>
    )
}