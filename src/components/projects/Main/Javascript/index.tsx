import { ScreenProjects } from "components/projects/ScreenProjects"
import { meuprimeirojogo,meusegundojogo, calculadora } from "components/projects/ImageProjects/imageProjects"
import { ProjectsIcons, cssW, htmlW, javascriptW, projectsImage } from "components/iconsLinguage/icons"

export const Javascript = () =>{

    const projectIcons: ProjectsIcons = {
        1:{
            1:{
                icon:javascriptW,
                alt:"javascript"
            },
            2:{
                icon: htmlW,
                alt:"HTML"
            },
            3:{
                icon:cssW,
                alt:"CSS"
            },
            
        },
    }
    const projects:projectsImage = {
        1:{project: meuprimeirojogo,
            description:"Meu primeiro jogo",
            Icon: projectIcons[1],
            Link: "https://gitpod.io/#https://github.com/MrMa-rio/myGame/"
        },
        2:{project: calculadora,
            description:"Calculadora",
            Icon: projectIcons[1],
            Link: "https://mrma-rio.github.io/Calculadora-V2.0/"
        },
        3:{project: meusegundojogo,
            description:"Snakezinho",
            Icon: projectIcons[1],
            Link: "http://gitpod.io/#https://github.com/MrMa-rio/mySecondGame"
        },
    }
    return(
        <>
            <ScreenProjects key={Math.floor(Math.random() * 1000)} projects={projects} />
        </>
    )
}

//https://gitpod.io/#https://github.com/MrMa-rio/myGame/