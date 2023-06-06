import Image from "next/image"
import eu from '../../assets/images/myImage.jpg'
import { MultiColor } from "components/multColor"


export const AboutMe = () => {

    return(
        <>
            <div className="w-fit mini-tela:h-96 flex justify-center items-center ssm:gap-6 mini-tela:gap-10 ssm:flex-col-reverse mini-tela:flex-row">
                <div className="bg-quartenary bg-opacity-30 dark:bg-dark-terciary rounded-lg">
                    <MultiColor />
                    <div className="px-4 pb-2">
                        <p className="ssm:w-64 mini-tela:w-80 text-lg text-white text-opacity-80 dark:text-white dark:text-opacity-60">
                            Meu nome é Mário Alberto e atualmente sou estudante na Universidade Paulista, cursando Análise e Desenvolvimento de Sistemas. Meu foco está na área de Desenvolvimento e Resolução de Problemas, com ênfase no atendimento às necessidades do usuário final. Minhas principais linguagens de programação são JavaScript e C#.
                        </p>
                    </div>
                </div>
                <div>
                    <Image src={eu} alt="Eu" className="w-64 rounded-full" />
                </div>
            </div>
        </>
    )
}