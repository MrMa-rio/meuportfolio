import { ScreenProjectsDesktop } from "components/projects/ScreenProjectsDesktop"
import { cornflixbr, cornflixbrV, breve, breveV, breakcoffe, breakcoffeV } from "components/projects/ImageProjects/imageProjects"
import { ProjectsIcons, javascriptW, projectsImage, reactW, tailwindW, typescriptW } from "components/iconsLinguage/icons"
import { ScreenProjectMobile } from "components/projects/ScreenProjectsMobile"

export const ReactJs = () =>{
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
        2:{
            1:{
                icon: reactW,
                alt:"ReactJs"
            },
            2:{
                icon: typescriptW,
                alt:"Typescript"
            },
            3:{
                icon:tailwindW,
                alt:"TailwindCSS"
            },
        },
        3:{}
    }
    const projects:projectsImage = {
        2:{
            project: cornflixbr,
            title:"Site Filmes (CornFlixBR)",
            Icon: projectIcons[1],
            site: "https://cornflixbr.vercel.app/",
            description: "Criei um site de filmes usando React.js, Tailwind CSS e React Router, conectado a uma API de filmes. É possível assistir filmes, séries e animes e obter informações detalhadas sobre eles. Utilizei o Tailwind CSS para criar um visual responsivo. Além disso, o React Router proporciona uma navegação suave e intuitiva entre as diferentes páginas. A API de filmes fornece os detalhes dos títulos, como sinopse, elenco e classificações. No geral, o projeto oferece uma experiência completa de streaming e informações sobre filmes e séries.",
            poster: cornflixbrV
        },
        1:{
            project: breakcoffe,
            title:"Projeto Loja Virtual",
            Icon: projectIcons[2],
            codigo: "https://github.com/MrMa-rio/Projeto_Loja",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis molestias nihil porro. Suscipit sint veniam delectus eveniet consequatur, magnam vel, laudantium iure quaerat nobis quo! Nesciunt, qui facere. Iste, cum?,",
            poster: breakcoffeV
        },
        3:{
            project: breve,
            title:"Em Breve...",
            Icon: projectIcons[3],
            poster: breveV
        },
    }
    return(
        <div>
            <div className="hidden mini-tela:flex">
                <ScreenProjectsDesktop key={Math.floor(Math.random() * 1000)} projects={projects} />
            </div>
            <div className="flex mini-tela:hidden">
                <ScreenProjectMobile key={Math.floor(Math.random() * 1000)} projects={projects} />
            </div>
        </div>
    )
}