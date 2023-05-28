import { ScreenProjects } from "components/projects/ScreenProjects"
import { cornflixbr,breve } from "components/projects/ImageProjects/imageProjects"

export const ReactJs = () =>{
    return(
        <>
            <ScreenProjects project1={cornflixbr} project2={breve} project3={breve} description={["Site de Filmes (CornFlixBR)","Em breve...", "Em breve..."]} />
        </>
    )
}