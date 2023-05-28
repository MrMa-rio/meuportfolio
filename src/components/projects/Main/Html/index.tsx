import { ScreenProjects } from "components/projects/ScreenProjects"
import { curiosidadesandroid, breve } from "components/projects/ImageProjects/imageProjects"


export const Html = () =>{
    return(
        <>
        <ScreenProjects project1={curiosidadesandroid} project2={breve} project3={breve} description={["Curiosidades Android","Em breve...", "Em breve..."]} />
        </>
    )
}