'use client'
import { Icon, ProjectsIcons } from "components/iconsLinguage/icons"
import { ImageProject } from "../ImageProjects"
import { useState } from "react"
import { Link } from "react-scroll"
import { DetailProject } from "components/detailProjects"
import { ProjectEmpty } from "../Main/ProjectEmpty"
export const ScreenProjectsDesktop = (props:{projects:ProjectsIcons }) =>{

    const [showDetail,setShowDetail] = useState<boolean>()
    const [project, setProject] = useState<Icon>(ProjectEmpty)
    
    const targetProject = (result:Icon) =>{
        if(result.description){
            setShowDetail(true)
        }
        else{
            setShowDetail(false)
        }
        setProject(result)
    }
    return(
        <div className=" detailProjects flex ssm:flex-col gap-16 justify-center items-center "> 
            <div className="flex flex-col mini-tela:flex-row mini-tela:gap-6 " >
                { Object.keys(props.projects).map((result) => {
                    return(
                        <div key={Math.floor(Math.random() * 1000)} >
                            <Link
                                onClick={() => {targetProject(props.projects[result])} }
                                to="detailProjects"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                className=" w-full mini-tela:w-1/2 h-16"
                                key={Math.floor(Math.random() * 1000)}
                            >
                                <ImageProject key={Math.floor(Math.random() * 1000)} thumb={props.projects[result].project} title={props.projects[result].title} Icon={props.projects[result].Icon} animation={false} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            {showDetail ? 
                <DetailProject project={project} /> : <></>}
        </div>
    )
}