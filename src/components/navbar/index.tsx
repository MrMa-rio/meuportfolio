import instagram_black from '../../assets/icons/instagram_black.svg'
import instagram_orange from '../../assets/icons/instagram_orange.svg'
import github_black from '../../assets/icons/github_black.svg'
import github_orange from '../../assets/icons/github_orange.svg'
import linkedin_black from '../../assets/icons/linkedin_black.svg'
import linkedin_orange from '../../assets/icons/linkedin_orange.svg'
import { SocialImage } from '../iconsEvents/events'

export const Navbar = () =>{

    

    return(
        <div className="flex bg-terciary w-screen h-12 justify-between items-center px-4 ">
            <div>
                <h2 className='font-segoe font-bold text-xl'>MARSN</h2>
            </div>
            <div className="flex flex-row gap-3 transition-all duration-700">
                <SocialImage image_black={github_black} image_white={github_orange} linkSocial='https://github.com/MrMa-rio' alt='Github' />
                <SocialImage image_black={linkedin_black} image_white={linkedin_orange} linkSocial='https://www.linkedin.com/in/marioalbertoneto' alt='Linkedin'/>
                <SocialImage image_black={instagram_black} image_white={instagram_orange} linkSocial='https://www.instagram.com/mr_mario_alberto/' alt='Instagram'/>
            </div>
        </div>
    )
}