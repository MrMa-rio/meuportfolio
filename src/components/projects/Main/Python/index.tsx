import { ScreenProjects } from "components/projects/ScreenProjects"
import { breve } from "components/projects/ImageProjects/imageProjects"
import { ProjectsIcons, projectsImage } from "components/iconsLinguage/icons"


export const Python = () =>{

    const projectIcons: ProjectsIcons = {
        1:{},
        2:{},
        3:{}
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
            Icon: projectIcons[2]
        },
        3:{
            project: breve,
            description:"Em Breve...",
            Icon: projectIcons[3]
        },
    }
    return(
        <>
            <ScreenProjects projects={projects}  />
        </>
    )
}