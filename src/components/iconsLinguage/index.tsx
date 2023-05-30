'use client'

import { IconsLP } from "components/iconsEvents/events"
import { tailwindB, tailwindO,
         javascriptB, javascriptO,
         htmlB, htmlO,
         cssB, cssO,
         pythonB, pythonO,
         csharpB, csharpO,
         reactB, reactO
         } from "./icons"
import { Link } from "react-scroll"
export const IconsLinguage = (props:{toggleScreen:Function, togglePopup:Function}) =>{

    return(
        <>
            <Link
                to="thumbImages"
                spy={true}
                smooth={true}
                duration={1000}
                className="cursor-pointer w-full mini-tela:w-1/2 h-16"
            >
            <div className="bg-secondary bg-opacity-70  rounded-xl">
                <div className="w-full h-full flex justify-center items-center p-2">

                
                    <IconsLP image_black={tailwindO} image_white={tailwindB} alt="TailwindCSS" screen={props.toggleScreen} popup={props.togglePopup} type={"Tailwind"} />
                    <IconsLP image_black={javascriptO} image_white={javascriptB} alt="Javascript" screen={props.toggleScreen} popup={props.togglePopup} type={"Javascript"} />
                    <IconsLP image_black={htmlO} image_white={htmlB} alt="HTML5" screen={props.toggleScreen} type={"Html"} popup={props.togglePopup}/>
                    <IconsLP image_black={cssO} image_white={cssB} alt="CSS3" screen={props.toggleScreen} popup={props.togglePopup} type={"Css"} />
                    <IconsLP image_black={pythonO} image_white={pythonB} alt="Python" screen={props.toggleScreen} popup={props.togglePopup} type={"Python"} />
                    <IconsLP image_black={csharpO} image_white={csharpB} alt="CSharp" screen={props.toggleScreen} popup={props.togglePopup} type={"CSharp"} />
                    <IconsLP image_black={reactO} image_white={reactB} alt="ReactJs" screen={props.toggleScreen} popup={props.togglePopup} type={"ReactJs"} />
                

                </div>
            </div>
            </Link>
        </>
    )
}