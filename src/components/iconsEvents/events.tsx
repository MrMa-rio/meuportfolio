'use client'

import Image from "next/image"
import React, { useState } from "react"

export const SocialImage = (props:{image_black:string, image_white:string, linkSocial:string, alt:string}) =>{

    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return(
        <div>
            <a href={props.linkSocial} target="_blank">
                <Image
                className="w-8"
                src={isHovered ? props.image_white : props.image_black}
                alt={props.alt}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
            </a>
        </div>
    )
}
export const IconsLP = (props:{image_black:string, image_white:string, alt:string, screen:Function, popup:Function, type:string}) =>{

    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return(
        <div onClick={() => {props.screen(props.type); props.popup()} }  >
            <Image
            className="w-14 opacity-50 transition-all duration-700 hover:opacity-75"
            src={isHovered ? props.image_black : props.image_white}
            alt={props.alt}
            onMouseEnter={ () => {
                handleMouseEnter()
                props.screen(props.type)
                
            }}
            
            onMouseLeave={ () => {
                handleMouseLeave()
                
            }}
            onClick={() => props.screen(props.type)}
            />

            
        </div>
    )
}