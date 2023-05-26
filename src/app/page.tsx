'use client'
import Image from "next/image"
import eu from "../assets/images/eu.png"
import React, { useEffect, useState } from 'react'
import {TypingAnimation} from "components/Writer"
import { Navbar } from "components"
import ArrowUp from '../assets/icons/arrowUp.svg'
import { IconsLinguage } from "components/iconsLinguage"
import { MainProject } from "components/projects/Main"
import { Link } from "react-scroll"

export default function Home() {
  
  const [screen, setScreen] = useState(false)
  const [typeLP, setTypeLP] = useState("Default")
  const [popup, setPopup] = useState(false)
  const toggleScreen = (TypeLP:string) => {
      
      setScreen(true)
      setTypeLP(TypeLP)
  }
  const togglePopup = () =>{
    setPopup(true)
  }
    

  return (
    <div>
      <div id="AboutMe" className=' flex justify-center items-center flex-col  gap-8 h-screen bg-gradient-to-t from-secondary to-terciary '>
        <nav className="fixed top-0">
          <Navbar />
        </nav>
        
        <div className="flex ssm:flex-col ssm:gap-5 mini-tela:gap-16 justify-center mini-tela:flex-row mini-tela:justify-center items-center mini-tela:w-1/2 mini-tela:px-32">
          <TypingAnimation />
          <Image src={eu} alt="MeuEuAnimado" className="rounded-full w-64 " />
        </div>
          <IconsLinguage toggleScreen={toggleScreen} togglePopup={togglePopup} />
      </div>
      { screen ? 
        <MainProject typeLP={typeLP} />
       : <></>}
       {popup ? <div className="relative ">
        <Link
          to="AboutMe"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <button className="fixed bottom-20 right-14 shadow-sm shadow-secondary bg-terciary opacity-90  w-16 h-16 rounded-full flex justify-center items-center " onClick={() => { setTimeout(() => setScreen(false), 950); setPopup(false)}}><Image src={ArrowUp} alt="ArrowUp" className="w-3/4 h-3/4" /> </button> 
        </Link>
          </div> : <></>}
        
    </div>
  )
}


/*
  Criar os icones para cada linguagem e barra de aprendizado Exemplo: python tailwindCSS, Javascript..etc //

  Para cada icone qunado o mouse entrar na imagem, deve aparecer os projetos que se enquadram no quesito da linguagem, caso nao tiver
  deve aparecer um template/thumb avisando que logo logo tera um projeto
  Finalizando isso.....

  
  Obs: buscar logica no site de filmes que faça a busca dos projetos a pos 2 segundos com o mouse em cima de uma linguagem
  Fazer um popup de aviso quando aproximar na div inferior,dar um aviso sobre essa fuunção
  Criar um sobre mim, e personalizar o resto do site
*/