import { Tailwind, Javascript, Html, Css, CSharp, Python, ReactJs } from "./imports"
export const MainProject = (props:{typeLP:string})=>{

    return(
        <div className="bg-secondary w-full h-screen flex justify-center items-center ">
            {props.typeLP == "Tailwind" ? 
                <Tailwind />
              : <></>}
            {props.typeLP == "Javascript" ?  <Javascript /> : <></>}
            {props.typeLP == "Html" ?  <Html /> : <></>}
            {props.typeLP == "Css" ?  <Css /> : <></>}
            {props.typeLP == "CSharp" ?  <CSharp /> : <></>}
            {props.typeLP == "Python" ?  <Python /> : <></>}
            {props.typeLP == "ReactJs" ?  <ReactJs /> : <></>}
         </div>
    )
}