import { ScreenProjects } from "components/projects/ScreenProjects"
import retangulo from '../../../../assets/images/retangulo.svg'


export const Python = () =>{
    return(
        <>
            <ScreenProjects project1={retangulo} project2={retangulo} project3={retangulo} description={["Em breve...","Em breve...", "Em breve..."]} />
        </>
    )
}