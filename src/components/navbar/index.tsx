import instagram_black from '../../assets/icons/instagram_black.svg'
import instagram_orange from '../../assets/icons/instagram_orange.svg'
import github_black from '../../assets/icons/github_black.svg'
import github_orange from '../../assets/icons/github_orange.svg'
import linkedin_black from '../../assets/icons/linkedin_black.svg'
import linkedin_orange from '../../assets/icons/linkedin_orange.svg'
import { SocialImage } from '../iconsEvents/events'
import { DarkMode } from 'components/DarkMode'
import { Github, Instagram, Linkedin } from 'lucide-react'

export const Navbar = () =>{

    

    return(
        <div className="flex bg-terciary dark:bg-dark-primary w-screen h-12 justify-between items-center px-4 ">
            <div>
                <h2 className='font-segoe dark:text-opacity-80 dark:text-white font-bold text-xl'>MARSN</h2>
            </div>
            <div className="flex flex-row gap-3 transition-all duration-700">
                <DarkMode />
                <a href="https://www.linkedin.com/in/marioalbertoneto"> <Linkedin className='dark:stroke-white dark:brightness-75 dark:hover:stroke-dark-quartenary hover:stroke-secondary' /> </a>
                <a href="https://github.com/MrMa-rio"> <Github className='dark:stroke-white dark:brightness-75 dark:hover:stroke-dark-quartenary hover:stroke-secondary' /> </a>
                <a href="https://www.instagram.com/mr_mario_alberto/"> <Instagram className='dark:stroke-white dark:brightness-75 dark:hover:stroke-dark-quartenary hover:stroke-secondary' /> </a>
                </div>
        </div>
    )
}

/*

<SocialImage image_black={github_black} image_white={github_orange} linkSocial='https://github.com/MrMa-rio' alt='Github' />
                <SocialImage image_black={linkedin_black} image_white={linkedin_orange} linkSocial='https://www.linkedin.com/in/marioalbertoneto' alt='Linkedin'/>
                <SocialImage image_black={instagram_black} image_white={instagram_orange} linkSocial='https://www.instagram.com/mr_mario_alberto/' alt='Instagram'/>
            
*/