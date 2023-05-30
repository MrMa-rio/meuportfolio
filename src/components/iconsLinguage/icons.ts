import tailwindB from '../../assets/icons/tailwind_black.svg'
import tailwindO from '../../assets/icons/tailwind_orange.svg'
import tailwindW from '../../assets/icons/tailwindW.svg'

import pythonB from '../../assets/icons/python_black.svg'
import pythonO from '../../assets/icons/python_orange.svg'
import pythonW from '../../assets/icons/pythonW.svg'

import javascriptB from '../../assets/icons/javascript_black.svg'
import javascriptO from '../../assets/icons/javascript_orange.svg'
import javascriptW from '../../assets/icons/javascriptW.svg'

import htmlB from '../../assets/icons/html5_black.svg'
import htmlO from '../../assets/icons/html5_orange.svg'
import htmlW from '../../assets/icons/htmlW.svg'

import cssB from '../../assets/icons/css3_black.svg'
import cssO from '../../assets/icons/css3_orange.svg'
import cssW from '../../assets/icons/cssW.svg'

import csharpB from '../../assets/icons/csharp_black.svg'
import csharpO from '../../assets/icons/csharp_orange.svg'
import csharpW from '../../assets/icons/csharpW.svg'

import reactB from '../../assets/icons/react_black.svg'
import reactO from '../../assets/icons/react_orange.svg'
import reactW from '../../assets/icons/reactW.svg'
import { StaticImageData } from 'next/image'

export {tailwindB, tailwindO, tailwindW}

export {pythonB, pythonO, pythonW}

export {javascriptB, javascriptO, javascriptW}

export {htmlB, htmlO, htmlW}

export {cssB, cssO, cssW}

export {csharpB, csharpO, csharpW}

export {reactB, reactO, reactW}

export interface Icon {
    [key: string]:Icon | string | any
}
export interface ProjectsIcons {
    [key:string]: Icon
}
export interface projectsImage {
    [key:string]:projectsImage | StaticImageData | string | Icon | any,
}