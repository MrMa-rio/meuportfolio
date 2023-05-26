'use client'
import React, { useState, useEffect } from 'react';

export const TypingAnimation = () => {
  const [text, setText] = useState<string>('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const targetText = "Prazer!! Meu nome é Mario, sou Desenvolvedor Front End. Bem vindo ao meu Portfólio.";
  let currentIndex = 0;
  let typingInterval: NodeJS.Timeout;
  if(currentIndex < targetText.length){
    useEffect(() => {
      const typeText = () => {
        if (currentIndex < targetText.length) {
          ++currentIndex;
          setText((prevText) => prevText + targetText[currentIndex-1]);
        } 
        else{
          clearInterval(typingInterval);
        }
      };
      typingInterval = setInterval(typeText, 110);
  
      return () => {
        clearInterval(typingInterval);
      };
    }, []);
    
    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setCursorVisible((prevCursorVisible) => !prevCursorVisible);
      }, 500);
  
      return () => {
        clearInterval(cursorInterval);
      };
    },[])
  }
  return (
    <div className='bg-primary bg-opacity-10 rounded-lg'>
      <div className='flex flex-row gap-2 top-0 p-5'>
        <div className='w-3 h-3 bg-red-700 rounded-full'></div>
        <div className='w-3 h-3 bg-orange-400 rounded-full'></div>
        <div className='w-3 h-3 bg-green-800 rounded-full'></div>
      </div>
      <div className='w-full px-10 pb-5'>
        <p className='w-60 ssm:text-xl mini-tela:text-2xl font-roboto font-bold'>{text}{cursorVisible && <span>|</span>}</p>
      </div>
    </div>
  );
}