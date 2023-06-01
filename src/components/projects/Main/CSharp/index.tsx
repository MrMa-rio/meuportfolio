import { ScreenProjects } from "components/projects/ScreenProjects"
import { breve } from "components/projects/ImageProjects/imageProjects"
import { projectsImage, ProjectsIcons } from "components/iconsLinguage/icons"
export const CSharp = () =>{
    const projectIcons: ProjectsIcons = {
        1:{},
    }
    const projects:projectsImage = {
        1:{
            project: breve,
            description:"Em Breve...",
            Icon: projectIcons[1]
        },
        2:{
            project: breve,
            description:"Em Breve...",
            Icon: projectIcons[1]
        },
        3:{
            project: breve,
            description:"Em Breve...",
            Icon: projectIcons[1],
        },
    }
    return(
        <>
            <ScreenProjects key={Math.floor(Math.random() * 1000)} projects={projects} />
        </>
    )
}