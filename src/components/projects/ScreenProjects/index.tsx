'use client'

import { StaticImageData } from "next/image"
import { ImageProject } from "../ImageProjects"
export const ScreenProjects = (props:{project1:StaticImageData, project2:StaticImageData, project3:StaticImageData, description:string[]}) =>{
    return(
        
        <div id="thumbImages" className=" ssm:w-screen  flex ssm:flex-col tela:flex-row gap-16 mini-tela:gap-6 justify-center items-center "> 
            <ImageProject thumb={props.project1} description={props.description[0]} />
            <ImageProject thumb={props.project2}  description={props.description[1]}/>
            <ImageProject thumb={props.project3} description={props.description[2]} />
        </div>
        
    )
    
}