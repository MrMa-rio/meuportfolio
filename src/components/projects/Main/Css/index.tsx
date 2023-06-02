import { ScreenProjects } from "components/projects/ScreenProjects"
import { curiosidadesandroid,curiosidadesV, cordel,cordelV, minhasredes,minhasredesV } from "components/projects/ImageProjects/imageProjects"
import { ProjectsIcons, cssW, htmlW, projectsImage } from "components/iconsLinguage/icons"
export const Css = () =>{
    const projectIcons: ProjectsIcons = {
        1:{
            1:{
                icon:cssW,
                alt:"CSS"
            },
            2:{
                icon: htmlW,
                alt:"HTML"
            },
        },
    }
    const projects:projectsImage = {
        1:{project: curiosidadesandroid,
            title:"Curiosidades Android",
            Icon: projectIcons[1],
            site: "https://mrma-rio.github.io/Curiosidades-Android/",
            codigo: "https://github.com/MrMa-rio/Curiosidades-Android",
            description: "Esse projeto foi elaborado junto a um curso de Desenvolvimento Web Básico. Nele é apresentado uma pequena parte da historia do Sistema Operacional Android. Nesse projeto foram colocadas em pratica o HTML com CSS contendo algumas otimizações para dispositivos móveis.",
            poster: curiosidadesV
        },
        2:{project: cordel,
            title:"Cordel Moderno",
            Icon: projectIcons[1],
            site: "https://mrma-rio.github.io/Desafio_Cordel/",
            codigo: "https://github.com/MrMa-rio/Desafio_Cordel",
            description: "Esse é mais um dos meus projetos academicos onde eu coloco em pratica um dos efeitos mais legais do CSS (o Parallax), nesse projeto foi apresentado um Cordel de Milton Duarte.",
            poster: cordelV
        },
        3:{project: minhasredes,
            title:"Minhas Redes",
            Icon: projectIcons[1],
            site: "https://mrma-rio.github.io/Projeto-social/",
            codigo: "https://github.com/MrMa-rio/Projeto-social",
            description: "No Projeto Redes fiz uma breve apresentação dos meus perfis sociais sendo eles, o Github, Facebook e o Instagram, em cada um, usei a tecnica do iFrame para mostrar uma rolagem de cada perfil social.",
            poster: minhasredesV
        },
    }
    return(
        <>
            <ScreenProjects key={Math.floor(Math.random() * 1000)} projects={projects} />
        </>
    )
}