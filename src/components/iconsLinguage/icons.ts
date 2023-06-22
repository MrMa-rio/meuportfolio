import tailwindB from '../../assets/icons/tailwind_black.svg'
import tailwindO from '../../assets/icons/tailwind_orange.svg'
import tailwindW from '../../assets/icons/tailwindW.svg'
import tailwindWM from '../../assets/icons/icons_white_com_moldura/tailwind.svg'

import typescriptB from '../../assets/icons/typescript_black.svg'
import typescriptO from '../../assets/icons/typescript_orange.svg'
import typescriptW from '../../assets/icons/typescriptW.svg'
import typescriptWM from '../../assets/icons/icons_white_com_moldura/typescript.svg'

import javascriptB from '../../assets/icons/javascript_black.svg'
import javascriptO from '../../assets/icons/javascript_orange.svg'
import javascriptW from '../../assets/icons/javascriptW.svg'
import javascriptWM from '../../assets/icons/icons_white_com_moldura/javascript.svg'

import htmlB from '../../assets/icons/html5_black.svg'
import htmlO from '../../assets/icons/html5_orange.svg'
import htmlW from '../../assets/icons/htmlW.svg'
import htmlWM from '../../assets/icons/icons_white_com_moldura/html.svg'

import cssB from '../../assets/icons/css3_black.svg'
import cssO from '../../assets/icons/css3_orange.svg'
import cssW from '../../assets/icons/cssW.svg'
import cssWM from '../../assets/icons/icons_white_com_moldura/css.svg'

import csharpB from '../../assets/icons/csharp_black.svg'
import csharpO from '../../assets/icons/csharp_orange.svg'
import csharpW from '../../assets/icons/csharpW.svg'
import csharpWM from '../../assets/icons/icons_white_com_moldura/csharp.svg'

import reactB from '../../assets/icons/react_black.svg'
import reactO from '../../assets/icons/react_orange.svg'
import reactW from '../../assets/icons/reactW.svg'
import reactWM from '../../assets/icons/icons_white_com_moldura/react.svg'

import { StaticImageData } from 'next/image'

import githubB from '../../assets/icons/github_black.svg'
import linkedinB from '../../assets/icons/linkedin_black.svg'
import instagramB from '../../assets/icons/instagram_black.svg'
import githubO from '../../assets/icons/github_orange.svg'
import linkedinO from '../../assets/icons/linkedin_orange.svg'
import instagramO from '../../assets/icons/instagram_orange.svg'

import euO from '../../assets/images/eu_orange_circle.png'
import euN from '../../assets/images/eu_night_circle.png'
import euL from '../../assets/images/eu_light_circle.png'

export {euL,euN,euO}

export {githubB,githubO,linkedinB,linkedinO,instagramB,instagramO}

export {tailwindB, tailwindO, tailwindW, tailwindWM}

export {typescriptB, typescriptO, typescriptW, typescriptWM}

export {javascriptB, javascriptO, javascriptW, javascriptWM}

export {htmlB, htmlO, htmlW, htmlWM}

export {cssB, cssO, cssW, cssWM}

export {csharpB, csharpO, csharpW, csharpWM}

export {reactB, reactO, reactW, reactWM}

export interface Icon {
    [key: string]:Icon | string | any
}
export interface ProjectsIcons {
    [key:string]: Icon
}
export interface projectsImage {
    [key:string]:projectsImage | StaticImageData | string | Icon | any,
}