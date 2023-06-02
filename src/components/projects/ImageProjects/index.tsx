import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ContainsLinguage } from "./containsLinguage";
import { Icon } from "components/iconsLinguage/icons";

export const ImageProject = (props:{thumb:StaticImageData, title:string, Icon:Icon}) =>{
    const [show, setShow] = useState(false)
    const toggleShow = () =>{
        setShow(!show)
    }
    return(
        <div className="w-80 h-52 ssm:w-60 ssm:h-fit mini-tela:w-64 mini-tela:h-fit xl:w-72 flex flex-col gap-4 ">
            <div 
            className="relative object-cover transition-all duration-300 ease-in-out transform-gpu hover:scale-110 opacity-75 hover:opacity-100" 
            onMouseEnter={toggleShow} 
            onMouseLeave={toggleShow}
            >
                <Image src={props.thumb} alt="Thumb" className=" bg-black rounded-xl shadow-md shadow-black" />
                { show ? <ContainsLinguage  Icon={props.Icon} /> : <></>}
            </div>
            <div className="w-full">
                <p className="text-center dark:text-white dark:text-opacity-70 font-bold w-full h-8 overflow-clip overflow-ellipsis text-xl">{props.title}</p>
            </div>
        </div>
    )
}
/*
{ texto.trim() == "" ? <div className=" bg-white w-full h-full flex flex-row justify-center items-center object-cover transition-transform duration-800 ease-in-out transform-gpu hover:gap-4 hover:scale-110 rounded-xl  opacity-75 hover:opacity-90">
                <p className="font-extrabold text-4xl">&lt;</p>
                <p className="font-extrabold text-4xl">&#47;</p>
                <p className="font-extrabold text-4xl">&gt;</p>
            </div> : }

*/