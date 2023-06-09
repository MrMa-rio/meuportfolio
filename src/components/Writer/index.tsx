'use client'
import { MultiColor } from 'components/multColor';
import React, { useState, useEffect } from 'react';

export const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const targetText = "Prazer!! Meu nome é Mário, sou Desenvolvedor Front End. Bem vindo ao meu Portfólio."
  let currentIndex = 0;
  let typingInterval: NodeJS.Timer
  useEffect(() => {
    
    const typeText = () => {
      
      if (currentIndex < targetText.length) {
        ++currentIndex;
        setText((prevText) => prevText + targetText[currentIndex-1]);
      } 
      else{
        clearInterval(typingInterval);
      }
      return () =>{
        clearInterval(typingInterval)
      }
    }
    typingInterval = setInterval(typeText, 110);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prevCursorVisible) => !prevCursorVisible);

      return () => {
      clearInterval(cursorInterval);
    };
    }, 450);
  },[currentIndex, targetText])
  
  return (
    <div className='bg-primary dark:bg-dark-primary bg-opacity-10 rounded-lg'>
     <MultiColor />
      <div className='w-full px-10 pb-5'>
        <p className='w-60 xsm:text-xl mini-tela:text-2xl dark:text-white dark:text-opacity-70 font-roboto font-bold'>{text}{cursorVisible && <span>|</span>}</p>
      </div>
    </div>
  )
}