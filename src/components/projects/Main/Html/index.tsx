import { ScreenProjects } from "components/projects/ScreenProjects"
import { curiosidadesandroid, cordel, minhasredes } from "components/projects/ImageProjects/imageProjects"
import { ProjectsIcons, cssW, htmlW, projectsImage } from "components/iconsLinguage/icons"

export const Html = () =>{

    const projectIcons: ProjectsIcons = {
        1:{
            
            1:{
                icon: htmlW,
                alt:"HTML"
            },
            2:{
                icon:cssW,
                alt:"CSS"
            },
        },
    }
    const projects:projectsImage = {
        1:{project: curiosidadesandroid,
            description:"Curiosidades Android",
            Icon: projectIcons[1]
        },
        2:{project: cordel,
            description:"Cordel Moderno",
            Icon: projectIcons[1]
        },
        3:{project: minhasredes,
            description:"Minhas Redes",
            Icon: projectIcons[1]
        },
    }
    return(
        <>
            <ScreenProjects projects={projects} />
        </>
    )
}