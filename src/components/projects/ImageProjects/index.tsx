import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ContainsLinguage } from "./containsLinguage";
import { Icon } from "components/iconsLinguage/icons";

export const ImageProject = (props:{thumb:StaticImageData, title:string, Icon:Icon, animation:boolean}) =>{
    const [show, setShow] = useState(false)
    const toggleShow = () =>{
        setShow(!show)
    }
    const [animation, setAnimation] = useState(false)
    const animationMobile = () =>{
        setAnimation(props.animation)
    }
    useEffect(() =>{
        animationMobile()
    },[])
    
    return(
        <div className="ssm:w-fit ssm:fit ssm:py-5 mini-tela:w-64 mini-tela:h-fit xl:w-72 flex flex-col justify-center items-center ssm:gap-6 mini-tela:gap-4 ">
            <div 
                className={`relative object-cover ssm:w-3/4 mini-tela:w-fit  transition-all duration-300 ease-in-out transform-gpu mini-tela:hover:scale-110 ${animation ? 'scale-110 opacity-100 ' : 'scale-100 opacity-75'}  hover:opacity-100` }
                onMouseEnter={toggleShow}
                onMouseLeave={toggleShow}
            >
                <Image 
                    src={props.thumb} 
                    alt="Thumb" 
                    className=" bg-black ssm:w-72 mini-tela:w-full rounded-xl shadow-md shadow-black" />
                { show || animation ? 
                    <ContainsLinguage  Icon={props.Icon} />
                 : <></>}
            </div>
            <div className="w-full">
                <p 
                    className="text-center dark:text-white dark:text-opacity-70 font-bold w-full h-8 overflow-clip overflow-ellipsis text-xl"
                >
                    {props.title}
                </p>
            </div>
        </div>
    )
}