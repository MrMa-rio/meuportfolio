import { ScreenProjects } from "components/projects/ScreenProjects"
import { breve, curiosidadesandroid } from "components/projects/ImageProjects/imageProjects"
import { tailwindW, csharpW, pythonW, projectsImage, ProjectsIcons } from "components/iconsLinguage/icons"
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
            Icon: projectIcons[1]
        },
    }
    return(
        <>
            <ScreenProjects projects={projects}  />
        </>
    )
}