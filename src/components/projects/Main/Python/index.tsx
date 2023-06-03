import { ScreenProjectsDesktop } from "components/projects/ScreenProjectsDesktop"
import { projectsEmpty } from "../ProjectEmpty"
import { ScreenProjectMobile } from "components/projects/ScreenProjectsMobile"

export const Python = () =>{

    
    return(
        <div>
            <div className="hidden mini-tela:flex">
                <ScreenProjectsDesktop key={Math.floor(Math.random() * 1000)} projects={projectsEmpty} />
            </div>
            <div className="flex mini-tela:hidden">
                <ScreenProjectMobile key={Math.floor(Math.random() * 1000)} projects={projectsEmpty} />
            </div>
        </div>
    )
}