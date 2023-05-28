import { ScreenProjects } from "components/projects/ScreenProjects"
import { meuprimeirojogo,meusegundojogo, calculadora } from "components/projects/ImageProjects/imageProjects"


export const Javascript = () =>{
    return(
        <>
            <ScreenProjects project1={meuprimeirojogo} project2={meusegundojogo} project3={calculadora} description={["Meu Primeiro jogo","Snakezinho", "Calculadora"]}/>
        </>
    )
}

//https://gitpod.io/#https://github.com/MrMa-rio/myGame/