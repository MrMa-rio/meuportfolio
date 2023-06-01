'use client'
import { ProjectsIcons } from "components/iconsLinguage/icons"
import { ImageProject } from "../ImageProjects"
export const ScreenProjects = (props:{projects:ProjectsIcons }) =>{
    return(
        <div id="thumbImages" className=" flex ssm:flex-col mini-tela:flex-row mini-tela:gap-6  gap-16 tela:gap-6 justify-center items-center "> 
            { Object.keys(props.projects).map((result) => <a key={Math.floor(Math.random() * 1000)} target="_blank" href={props.projects[result].Link}><ImageProject key={Math.floor(Math.random() * 1000)} thumb={props.projects[result].project} description={props.projects[result].description} Icon={props.projects[result].Icon} /></a> ) }
        </div>
    )
}