'use client'
import Image from "next/image"
import eu from "../assets/images/eu_light.png"
import eu_night from "../assets/images/eu_night3.png"
import React, { useState } from 'react'
import { Navbar, TypingAnimation, MainProject, IconsLinguage } from "components"
import { Link } from "react-scroll"
import { Contacts } from "components/Contacts"
import { ChevronUp } from "lucide-react"

export default function Home() {
  
  const [screen, setScreen] = useState(false)
  const [typeLP, setTypeLP] = useState("Default")
  const [popup, setPopup] = useState(false)
  const [MyImage,setMyImage] = useState<any>("light")

  const toggleScreen = (TypeLP:string) => {
    setScreen(true)
    setTypeLP(TypeLP)
  }
  const togglePopup = () =>{
    setPopup(true)
  }
  const toggleMyImage = () =>{
    setMyImage(localStorage.getItem("color-theme"))
  }
  return (
    <>
      <div id="Initial" className='flex justify-center items-center flex-col gap-8 h-screen bg-gradient-to-t from-secondary to-terciary  dark:from-dark-secondary dark:to-dark-primary dark:transition-colors dark:delay-200 dark:duration-1000 '>
        <div className=" flex ssm:flex-col ssm:gap-5 mini-tela:gap-16 justify-center mini-tela:flex-row mini-tela:justify-center items-center mini-tela:w-1/2 mini-tela:px-32">
          <TypingAnimation />
         { MyImage === "dark" ? <Image src={eu_night} alt="MeuEuAnimado" className="rounded-full w-64 " /> : <Image src={eu} alt="MeuEuAnimado" className="rounded-full w-64 " />}
        </div>
          <IconsLinguage 
            toggleScreen={toggleScreen} 
            togglePopup={togglePopup} 
            darkMode={MyImage} />
      </div>
      <div>
        { screen ?
            <MainProject typeLP={typeLP} darkMode={MyImage} />
         : <></>}
      </div>


      <footer>
        <Contacts />
      </footer>


      {popup ? 
        <div>
          <Link
            to="Initial"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <button className="fixed z-50 bottom-20 right-14 shadow-md shadow-secondary dark:shadow-black bg-terciary dark:bg-dark-quartenary opacity-70 hover:opacity-100  w-16 h-16 rounded-full flex justify-center items-center "
              onClick={() => { 
                setTimeout(() =>{
                  setScreen(false)
                }, 950) 
                setPopup(false)
                }}
            > 
              <ChevronUp className="w-3/4 h-1/2 dark:stroke-white" />
            </button> 
          </Link>
        </div> 
        : 
      <></>}
      <nav onClick={toggleMyImage} className="fixed top-0 w-screen z-50">
        <Navbar />
      </nav>
    </>
  )
}