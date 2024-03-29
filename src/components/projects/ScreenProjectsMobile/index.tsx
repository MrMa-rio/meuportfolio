import { Icon, ProjectsIcons } from "components/iconsLinguage/icons"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-scroll";
import { ImageProject } from "../ImageProjects";
import { ProjectEmpty } from "../Main/ProjectEmpty";
import { DetailProjectMobile } from "components/detailProjects";

export const ScreenProjectMobile = (props:{projects:ProjectsIcons }) => {

    const [showDetail,setShowDetail] = useState<boolean>()
    const [project, setProject] = useState<Icon>(ProjectEmpty)
    const [animationMobile, setAnimationMobile] = useState<number>(1)
    const targetProject = (result:Icon) =>{
        if(result.description){
            setShowDetail(true)
        }
        else{
            setShowDetail(false)
        }
        setProject(result)
    }
    

  return (
    <div className="relative w-screen">
        <Swiper
            centeredSlides={true}
            slidesPerView={1.8}
            initialSlide={1}
            spaceBetween={5}
            onActiveIndexChange={(result) => {setAnimationMobile(result.activeIndex);targetProject(props.projects[result.activeIndex+1]) }}
        >
        { Object.keys(props.projects).map((result) => {
            return(
                <div key={Math.floor(Math.random() * 1000)} >
                    
                    <SwiperSlide key={Math.floor(Math.random() * 1000)}  >
                        <div key={Math.floor(Math.random() * 1000)} className="w-full relative h-full flex justify-center items-center" >
                            <Link
                                onClick={() => {targetProject(props.projects[result])} }
                                to="thumbImages"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                key={Math.floor(Math.random() * 1000)}
                            >
                                <ImageProject key={Math.floor(Math.random() * 1000)} thumb={props.projects[result].poster} title={props.projects[result].title} Icon={props.projects[result].Icon} animation={animationMobile == Number(result)-1 ? true : false} />
                            </Link>
                        </div>
                    </SwiperSlide>
                </div>
            )
        })}
      </Swiper>
      { showDetail ? 
        <DetailProjectMobile project={project} /> : <></>}
    </div>
  );
}

/*
    Bugs à ser corrigidos:
        Os icones não levam o usuario aos projetos //
        O botão amarelo está sendo sobrepostos pelo carrossel //

    Adicionar os detalhes dos projetos na versao mobile
        Fazer aparecer os detalhes com base na paginação ou 
            com base no projeto focalizado no carrossel
    Fazer uma animação do no projeto focalizado no carrossel

    Fazer um carregamento nas imagens, otimiza-las


*/