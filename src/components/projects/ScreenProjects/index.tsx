'use client'
import { ProjectsIcons } from "components/iconsLinguage/icons"
import { ImageProject } from "../ImageProjects"
export const ScreenProjects = (props:{projects:ProjectsIcons }) =>{
    return(
        <div id="thumbImages" className=" ssm:w-screen  flex ssm:flex-col tela:flex-row gap-16 mini-tela:gap-6 justify-center items-center "> 
            { Object.keys(props.projects).map((result) => <ImageProject thumb={props.projects[result].project} description={props.projects[result].description} Icon={props.projects[result].Icon} />) }
        </div>
    )
}