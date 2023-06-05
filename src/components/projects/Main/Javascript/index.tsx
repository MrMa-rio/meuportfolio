import { ScreenProjectsDesktop } from "components/projects/ScreenProjectsDesktop"
import { meuprimeirojogo, meuprimeirojogoV, meusegundojogo, meusegundojogoV, calculadora, calculadoraV } from "components/projects/ImageProjects/imageProjects"
import { ProjectsIcons, cssW, htmlW, javascriptW, projectsImage } from "components/iconsLinguage/icons"
import { ScreenProjectMobile } from "components/projects/ScreenProjectsMobile"

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
            title:"Meu primeiro jogo",
            Icon: projectIcons[1],
            site: "https://gitpod.io/#https://github.com/MrMa-rio/myGame/",
            codigo: "https://github.com/MrMa-rio/myGame",
            description: "Desenvolvi um jogo inspirado na cobrinha com algoritmo bem estruturado e desacoplado, priorizando um código limpo. Implementei um sistema de pontuação competitivo e garanti a acessibilidade em dispositivos móveis. Foi uma jornada de aprendizado e superação, com funcionalidades a serem adicionadas no futuro para aprimorar a experiência do jogo.",
            poster: meuprimeirojogoV
        },
        2:{project: calculadora,
            title:"Calculadora",
            Icon: projectIcons[1],
            site: "https://mrma-rio.github.io/Calculadora-V2.0/",
            codigo: "https://github.com/MrMa-rio/Calculadora-V2.0",
            description: "O objetivo desse projeto foi colocar em pratica a criação de tabelas e também implementar uma logica basica em Javascript, nesse projeto o usuario ira conseguir efetuar algumas operações matemáticas como, subtração, adição, multiplicação e divisão.",
            poster: calculadoraV
        },
        3:{project: meusegundojogo,
            title:"Snakezinho",
            Icon: projectIcons[1],
            site: "http://gitpod.io/#https://github.com/MrMa-rio/mySecondGame",
            codigo: "https://github.com/MrMa-rio/mySecondGame",
            description: "Esse projeto foi uma continuação do meu primeiro jogo, nele quis saber mais sobre a biblioteca Socket.io e quis explorar um pouco sobre os conceitos de Arquitetura de Software e Designer Patterns. O jogo em si tem o objetivo do player alcançar o maior numero de pontos, tendo como obstáculo um robô que irá segui-lo durante todo o tempo, mas cuidado, se caso o robô TE PEGAR você irá perder todos os PONTOS.",
            poster: meusegundojogoV
        },
    }
    return(
        <div>
            <div className="hidden mini-tela:flex">
                <ScreenProjectsDesktop key={Math.floor(Math.random() * 1000)} projects={projects} />
            </div>
            <div className="mini-tela:hidden w-full">
                <ScreenProjectMobile key={Math.floor(Math.random() * 1000)} projects={projects} />
            </div>
        </div>
    )
}