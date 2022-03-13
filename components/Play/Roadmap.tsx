import Image from "next/image";
import { useEffect, useState } from "react";

interface RoadmapProps {
  setActivePage: (v: number) => void
  selectOption: string
  language?: string
}

export default function Roadmap(props: RoadmapProps) {

  const en = ['Roadmap for 2022']
  const br = ['Roteiro para 2022']

  const options = props.language === 'en' ? en : br

  const [selectedOption, setSelectedOption] = useState(props.selectOption)

  useEffect(() => {
    let newOption = selectedOption
    if (options.indexOf(newOption) == -1) {
      if (props.language == 'en') {
        setSelectedOption(en[br.indexOf(newOption)])
      } else {
        setSelectedOption(br[en.indexOf(newOption)])
      }
    }
  }, [props.language])

  function renderText(v: string) {

    if (v == (props.language === 'en' ? 'Roadmap for 2022' : 'Roteiro para 2022')) {
      return (
        <>
          <div className="absolute left-4 font-PassionOne space-y-8 mt-3">
            <div>
              <div className="text-[#E2113C] text-2xl">{props.language == 'en' ? 'First quarter' : 'Primeiro Trimestre'}</div>
              <div className="mt-2 flex flex-col gap-3 text-xl">
                <div>{props.language == 'en' ? 'Ecosystem planning and game economy' : <span>Planejamento do ecossistema <br />e economia do jogo</span>}</div>
                <div>{props.language == 'en' ? 'Logo creation' : 'Criação do logotipo'}</div>
                <div>{props.language == 'en' ? 'Website development' : 'Desenvolvimento do website'}</div>
                <div>{props.language == 'en' ? 'Contract development' : 'Desenvolvimento do contrato'}</div>
                <div>{props.language == 'en' ? 'Creation of social networks' : 'Criação das redes sociais'}</div>
                <div>{props.language == 'en' ? "Creation of truck NFT's arts" : "Criação das artes NFT's de caminhões"}</div>
                <div>{props.language == 'en' ? <span>Launch of the IGC Token pre-sale<br /> on PinkSale</span> : <span>Lançamento da pré-venda <br />do Token IGC na PinkSale</span>}</div>
              </div>
            </div>
          </div>
          <div className="absolute right-4 text-right font-PassionOne space-y-8 mt-3">
            <div>
              <div className="text-[#216D8D] text-2xl">{props.language == 'en' ? 'Second quarter' : 'Segundo Trimestre'}</div>
              <div className="mt-2 flex flex-col gap-3 text-xl">
                <div>{props.language == 'en' ? 'KYC and Audit certificates' : 'Certificados KYC e Audit'}</div>
                <div>{props.language == 'en' ? 'Token launch on PancakeSwap' : 'Lançamento do token na PancakeSwap'}</div>
                <div>{props.language == 'en' ? 'Listing on CoinMarketCap' : 'Listagem na CoinMarketCap'}</div>
                <div>{props.language == 'en' ? 'Listing on CoinGecko' : 'Listagem na CoinGecko'}</div>
              </div>
            </div>
            <div>
              <div className="text-[#859B5A] text-2xl">{props.language == 'en' ? 'Third quarter' : 'Terceiro Trimestre'}</div>
              <div className="mt-2 flex flex-col gap-3 text-xl">
                <div>{props.language == 'en' ? '3D racing game planning' : 'Planejamento do jogo 3D de corrida'}</div>
                <div>{props.language == 'en' ? 'Start of 3D game development' : 'Inicio do desenvolvimento do jogo 3D'}</div>
              </div>
            </div>
            <div>
              <div className="text-[#EE960F] text-2xl">{props.language == 'en' ? 'Fourth quarter' : 'Quarto Trimestre'}</div>
              <div className="mt-2 flex flex-col gap-3 text-xl">
                <div>{props.language == 'en' ? '3D racing game launch' : 'Lançamento do jogo 3D de corrida'}</div>
              </div>
            </div>
          </div>
          {props.language == 'en'
            ?
            <Image
              src={`/game-img/roadmap_en.svg`}
              alt="icon-dashboard"
              width={1000}
              height={720}
            />
            :
            <Image
              src={`/game-img/roadmap_br.svg`}
              alt="icon-dashboard"
              width={1000}
              height={720}
            />
          }
        </>
      )
    }
  }

  return (
    <div className="text-left px-3">
      <div className="flex items-center gap-3">
        <div onClick={() => props.setActivePage(0)}>
          <Image
            src={`/game-img/close.svg`}
            alt="icon-dashboard"
            width={14}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <span className="text-4xl font-PassionOne">{props.language === 'en' ? 'Roadmap for 2022' : 'Roteiro para 2022'}</span>
      </div>
      <div className="mt-3 text-justify flex flex-col gap-4">
        <select className="text-xl text-[#F28B0C] opacity-70 bg-transparent cursor-pointer"
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}>
          {options.map((opt, key) => <option className="bg-zinc-800 text-base" key={key} value={opt}>{opt}</option>)}
        </select>
        <div className="flex flex-col gap-4 overflow-y-auto h-[525px] p-3 text-base">
          {renderText(selectedOption)}
        </div>
        <div className="flex justify-between font-PassionOne -mt-3 px-2">
          <div className="flex flex-col text-left cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Roadmap for 2022' : 'Roteiro para 2022') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Previous' : 'Anterior'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Roadmap for 2022' : 'Roteiro para 2022') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1]}</span>
          </div>
          <div className="flex flex-col text-right cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Roadmap for 2022' : 'Roteiro para 2022') ? options[0] : options[options.indexOf(selectedOption) + 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Next' : 'Próximo'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Roadmap for 2022' : 'Roteiro para 2022') ? options[0] : options[options.indexOf(selectedOption) + 1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}