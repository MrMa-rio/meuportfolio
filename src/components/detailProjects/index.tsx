import { Icon } from "components/iconsLinguage/icons"
import Image from "next/image"

export const DetailProject = (props:{ project:Icon}) =>{
    return(
        <div id="detailProject" className= " hidden w-full p-1 mini-tela:flex justify-center items-center gap-10 ">
            <div className=" w-full h-fit mini-tela:w-1/2 bg-secondary dark:bg-dark-terciary bg-opacity-40 p-3 flex flex-col justify-center rounded-md ">
                <h1 className="mini-tela:text-2xl xl:text-4xl font-semibold dark:text-white dark:text-opacity-60">{props.project.title}</h1>
                <p className="w-full h-56 shadow-inner_buttom p-1 overflow-y-auto font-roboto text-2xl text-white dark:text-opacity-60 bg-opacity-60 ">{props.project.description}</p>
                <div className="flex justify-between items-center">
                    <div className='flex gap-3 text-white font-semibold py-2'>
                        {props.project.site ? <a target="_blank" href={props.project.site}><button className='bg-quartenary bg-opacity-60 hover:bg-opacity-80 dark:bg-opacity-60 dark:hover:bg-opacity-80 dark:bg-dark-quartenary p-1 rounded-md'><p>Acessar Site</p></button></a> : <></>}
                        {props.project.codigo ? <a target="_blank" href={props.project.codigo}><button className='bg-quartenary bg-opacity-60 hover:bg-opacity-80 dark:bg-opacity-60 dark:hover:bg-opacity-80 dark:bg-dark-quartenary p-1 rounded-md'> <p>Ver Código</p></button></a> : <></>}
                    </div>
                    <div className="flex">
                        {Object.keys(props.project.Icon).map((result) => <Image key={Math.floor(Math.random() * 1000)}  src={props.project.Icon[result].icon} alt={props.project.Icon[result].alt} className="w-10 dark:brightness-75" /> )}
                    </div>
                </div>
            </div>
            <div className="w-fit flex justify-center items-center p-5 ">
                <Image src={props.project.poster} alt={props.project.title} className="w-56 rounded-md shadow-lg rotate-6 shadow-dark-terciary dark:brightness-50 dark:hover:brightness-75 " />
            </div>

        </div>
    )
}