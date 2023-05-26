'use client'

import { ImageProject } from "../ImageProjects"
export const ScreenProjects = (props:{project1:string, project2:string, project3:string, description:string[]}) =>{
    return(
        
        <div id="thumbImages" className=" ssm:w-screen  flex ssm:flex-col tela:flex-row gap-16 mini-tela:gap-6 justify-center items-center "> 
            <ImageProject thumb={props.project1} description={props.description[0]} />
            <ImageProject thumb={props.project2}  description={props.description[1]}/>
            <ImageProject thumb={props.project3} description={props.description[2]} />
        </div>
        
    )
    
}