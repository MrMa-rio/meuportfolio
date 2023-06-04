import Image from "next/image"
import { Icon } from "components/iconsLinguage/icons"

export const ContainsLinguage = (props:{Icon:Icon}) =>{
  return(
      <div className="absolute flex flex-row justify-center gap-2 p-1 rounded-b-xl bottom-0 w-full h-10 bg-black bg-opacity-40 ">
          {Object.keys(props.Icon).map((result) =>
            <Image 
              key={Math.floor(Math.random() * 1000)} 
              src={props.Icon[result].icon} 
              alt={props.Icon[result].alt} 
              className="w-8" 
            />)}
      </div>
  )
}