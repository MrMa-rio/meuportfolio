import { ScreenProjects } from "components/projects/ScreenProjects"
import { breve } from "components/projects/ImageProjects/imageProjects"


export const Python = () =>{
    return(
        <>
            <ScreenProjects project1={breve} project2={breve} project3={breve} description={["Em breve...","Em breve...", "Em breve..."]} />
        </>
    )
}