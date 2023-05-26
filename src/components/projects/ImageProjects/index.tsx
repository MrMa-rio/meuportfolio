import Image from "next/image";

export const ImageProject = (props:{thumb:string, description:string}) =>{
    const texto = String(props.thumb)
    const description = String(props.description)
    return(
        <div className="w-80 h-52 ssm:w-60 ssm:h-36 mini-tela:w-64 mini-tela:h-52 xl:w-fit xl:h-fit flex flex-col gap-4">
            { texto.trim() == "" ? <div className=" bg-white w-full h-full flex flex-row justify-center items-center object-cover transition-transform duration-800 ease-in-out transform-gpu hover:gap-4 hover:scale-110 rounded-xl  opacity-75 hover:opacity-90">
                <p className="font-extrabold text-4xl">&lt;</p>
                <p className="font-extrabold text-4xl">&#47;</p>
                <p className="font-extrabold text-4xl">&gt;</p>
            </div> : <div>
                <Image src={props.thumb} alt="Thumb" className="object-cover transition-transform duration-300 ease-in-out transform-gpu hover:scale-110 rounded-xl shadow-md shadow-black opacity-75 hover:opacity-90" />
            </div> }
            <div className="w-full">
                <p className="text-center font-bold w-ful h-8 overflow-clip overflow-ellipsis text-xl">{description.trim() != "" ? props.description : "Em breve..."}</p>
            </div>
        </div>
    )
}
//            

