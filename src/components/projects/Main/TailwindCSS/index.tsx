import { ScreenProjects } from "components/projects/ScreenProjects"
import { breve, cornflixbr } from "components/projects/ImageProjects/imageProjects"


export const Tailwind = () =>{
    return(
        <>
            <ScreenProjects project1={cornflixbr} project2={breve} project3={breve} description={["Em breve...","Em breve...", "Em breve..."]} />
        </>
    )
}