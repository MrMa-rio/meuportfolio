import { ScreenProjects } from "components/projects/ScreenProjects"
import { projectsEmpty } from "../ProjectEmpty"
export const CSharp = () =>{
    return(
        <>
            <ScreenProjects key={Math.floor(Math.random() * 1000)} projects={projectsEmpty} />
        </>
    )
}