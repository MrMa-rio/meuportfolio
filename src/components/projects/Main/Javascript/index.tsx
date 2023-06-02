import { ScreenProjects } from "components/projects/ScreenProjects"
import { meuprimeirojogo, meuprimeirojogoV, meusegundojogo, meusegundojogoV, calculadora, calculadoraV } from "components/projects/ImageProjects/imageProjects"
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
            title:"Meu primeiro jogo",
            Icon: projectIcons[1],
            site: "https://gitpod.io/#https://github.com/MrMa-rio/myGame/",
            codigo: "https://github.com/MrMa-rio/myGame",
            description: "Esse sem duvidas foi um desafio para mim, nele aprendi e desenvolvi coisa que eu jamais achava que conseguiria(por mais que ainda tenha muita coisa para adicionar), o objetivo desse projeto não foi somente criar um jogo similar ao da cobrinha, ele também foi para eu aplicar um dos conceitos mais dificéis para um programador(bom..é o mais dificil para mim até agora), o algoritmo dele consiste em varias funções e metodos (quase) totalmente desacoplados, digo isso porque quem for ver vai saber. O jogo em si tem o objetivo principal de, quem coletar mais frutinhas vence, então foi implementado todo um sistema de pontuação que irá ser exibido na tela, tem também uma compatibilidade simples para jogadores mobile.",
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
        <>
            <ScreenProjects key={Math.floor(Math.random() * 1000)} projects={projects} />
        </>
    )
}

//https://gitpod.io/#https://github.com/MrMa-rio/myGame/