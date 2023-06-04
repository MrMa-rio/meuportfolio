'use client'
import { Link } from "react-scroll"
import { useEffect, useState } from "react"
import { IconsLP } from "components/iconsEvents/events"
import { tailwindB, tailwindO,tailwindWM,
         javascriptB, javascriptO,javascriptWM,
         htmlB, htmlO,htmlWM,
         cssB, cssO,cssWM,
         pythonB, pythonO,pythonWM,
         csharpB, csharpO,csharpWM,
         reactB, reactO,reactWM
         } from "./icons"

export const IconsLinguage = (props:{toggleScreen:Function, togglePopup:Function, darkMode:any}) =>{

  const [screen, setScreen] = useState<any>()
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  },[])
    
  return(
    <>
      <Link
          to={ screen > 825 ? "thumbImages" : "thumbImageMobile" } 
          spy={true}
          smooth={true}
          duration={1000}
          className=" w-full mini-tela:w-1/2 h-16"
      >
        <div className="bg-secondary dark:bg-dark-terciary dark:bg-opacity-100 bg-opacity-70 flex justify-center  rounded-xl">
            <div className="w-fit cursor-pointer h-full flex justify-center items-center p-2">
                <IconsLP image_black={ props.darkMode != "dark" ? htmlO : htmlWM } image_white={htmlB} alt="HTML5" screen={props.toggleScreen} type={"Html"} popup={props.togglePopup}/>
                <IconsLP image_black={ props.darkMode != "dark" ? cssO : cssWM } image_white={cssB} alt="CSS3" screen={props.toggleScreen} popup={props.togglePopup} type={"Css"} />
                <IconsLP image_black={ props.darkMode != "dark" ? javascriptO : javascriptWM } image_white={javascriptB} alt="Javascript" screen={props.toggleScreen} popup={props.togglePopup} type={"Javascript"} />
                <IconsLP image_black={ props.darkMode != "dark" ? reactO : reactWM } image_white={reactB} alt="ReactJs" screen={props.toggleScreen} popup={props.togglePopup} type={"ReactJs"} />
                <IconsLP image_black={ props.darkMode != "dark" ? tailwindO : tailwindWM } image_white={tailwindB} alt="TailwindCSS" screen={props.toggleScreen} popup={props.togglePopup} type={"Tailwind"} />
                <IconsLP image_black={ props.darkMode != "dark" ? pythonO : pythonWM } image_white={pythonB} alt="Python" screen={props.toggleScreen} popup={props.togglePopup} type={"Python"} />
                <IconsLP image_black={ props.darkMode != "dark" ? csharpO : csharpWM } image_white={csharpB} alt="CSharp" screen={props.toggleScreen} popup={props.togglePopup} type={"CSharp"} />
            </div>
        </div>
      </Link> 
    </>
  )
}