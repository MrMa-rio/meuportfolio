import { ScreenProjectsDesktop } from "components/projects/ScreenProjectsDesktop"
import { ScreenProjectMobile } from "components/projects/ScreenProjectsMobile"
import { ProjectsIcons, projectsImage, reactW, tailwindW, typescriptW } from "components/iconsLinguage/icons"
import { breve, breveV, breakcoffe,breakcoffeV } from "components/projects/ImageProjects/imageProjects"

export const Typescript = () =>{

    const projectIcons: ProjectsIcons = {
        1:{
            1:{
                icon: reactW,
                alt:"ReactJs"
            },
            2:{
                icon:typescriptW,
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
            project: breakcoffe,
            title:"Projeto Loja Virtual",
            Icon: projectIcons[2],
            codigo: "https://github.com/MrMa-rio/Projeto_Loja",
            description: "Nesse projeto, pude me aprofundar nas ferramentas que o próprio navegador disponibiliza, como o localStorage, onde consigo armazenar alguns dados. Além disso, consegui aprofundar-me na linguagem TypeScript e também nas criações de hooks do React. Com isso, pude conhecer melhor o Next.js e o GraphiQL, e como essas ferramentas podem facilitar o desenvolvimento da aplicação, tornando-a mais segura e otimizada.",
            poster: breakcoffeV
        },
        1:{
            project: breve,
            title:"Em Breve...",
            Icon: projectIcons[2],
            poster: breveV
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