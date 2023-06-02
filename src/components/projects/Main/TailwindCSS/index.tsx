import { ScreenProjects } from "components/projects/ScreenProjects"
import { breve, cornflixbr, cornflixbrV } from "components/projects/ImageProjects/imageProjects"
import { ProjectsIcons, javascriptW, projectsImage, reactW, tailwindW } from "components/iconsLinguage/icons"


export const Tailwind = () =>{
    const projectIcons: ProjectsIcons = {
        1:{
            1:{
                icon: reactW,
                alt:"ReactJs"
            },
            2:{
                icon:javascriptW,
                alt:"Javascript"
            },
            3:{
                icon:tailwindW,
                alt:"TailwindCSS"
            },
        },
        2:{},
        3:{}
    }
    const projects:projectsImage = {
        1:{
            project: cornflixbr,
            title:"Site Filmes (CornFlixBR)",
            Icon: projectIcons[1],
            site: "https://cornflixbr.vercel.app/",
            description: "jnesufesfesunefsuenfusfsefuisen nufnseufunsefnsf nuesufs",
            poster: cornflixbrV
        },
        2:{
            project: breve,
            title:"Em Breve...",
            Icon: projectIcons[2]
        },
        3:{
            project: breve,
            title:"Em Breve...",
            Icon: projectIcons[3]
        },
    }
    return(
        
        <ScreenProjects key={Math.floor(Math.random() * 1000)} projects={projects} />
    )
}