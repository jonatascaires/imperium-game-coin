import Image from "next/image";
import { useEffect, useState } from "react";

interface WhitepaperProps {
  setActivePage: (v: number) => void
  selectOption: string
  language?: string
}

export default function Whitepaper(props: WhitepaperProps) {

  const en = ['Introduction 1/3', 'Introduction 2/3', 'Introduction 3/3', 'Token IGC', 'Savings', 'The game', 'Types of trucks', 'Truck upgrade', 'Fuel', 'Repair', 'Rewards']
  const br = ['Introdução 1/3', 'Introdução 2/3', 'Introdução 3/3', 'Token IGC', 'Poupança', 'O jogo', 'Tipos de caminhões', 'Upgrade do caminhão', 'Combustível', 'Reparo', 'Recompensas']

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
    if (v == (props.language === 'en' ? 'Introduction 1/3' : 'Introdução 1/3')) {
      return (
        <Image
          src={`/game-img/whitepaper/${props.language}/Slide1.svg`}
          alt="icon-dashboard"
          width={1000}
          height={720}
        />
      )
    } else
      if (v == (props.language === 'en' ? 'Introduction 2/3' : 'Introdução 2/3')) {
        return (
          <Image
            src={`/game-img/whitepaper/${props.language}/Slide2.svg`}
            alt="icon-dashboard"
            width={1000}
            height={720}
          />
        )
      } else
        if (v == (props.language === 'en' ? 'Introduction 3/3' : 'Introdução 3/3')) {
          return (
            <Image
              src={`/game-img/whitepaper/${props.language}/Slide3.svg`}
              alt="icon-dashboard"
              width={1000}
              height={720}
            />
          )
        } else
          if (v == 'Token IGC') {
            return (
              <Image
                src={`/game-img/whitepaper/${props.language}/Slide4.svg`}
                alt="icon-dashboard"
                width={1000}
                height={720}
              />
            )
          } else
            if (v == (props.language === 'en' ? 'Savings' : 'Poupança')) {
              return (
                <Image
                  src={`/game-img/whitepaper/${props.language}/Slide5.svg`}
                  alt="icon-dashboard"
                  width={1000}
                  height={720}
                />
              )
            } else
              if (v == (props.language === 'en' ? 'The game' : 'O jogo')) {
                return (
                  <Image
                    src={`/game-img/whitepaper/${props.language}/Slide6.svg`}
                    alt="icon-dashboard"
                    width={1000}
                    height={720}
                  />
                )
              } else
                if (v == (props.language === 'en' ? 'Types of trucks' : 'Tipos de caminhões')) {
                  return (
                    <Image
                      src={`/game-img/whitepaper/${props.language}/Slide7.svg`}
                      alt="icon-dashboard"
                      width={1000}
                      height={720}
                    />
                  )
                } else
                  if (v == (props.language === 'en' ? 'Truck upgrade' : 'Upgrade do caminhão')) {
                    return (
                      <Image
                        src={`/game-img/whitepaper/${props.language}/Slide20.svg`}
                        alt="icon-dashboard"
                        width={1000}
                        height={720}
                      />
                    )
                  } else
                    if (v == (props.language === 'en' ? 'Fuel' : 'Combustível')) {
                      return (
                        <Image
                          src={`/game-img/whitepaper/${props.language}/Slide21.svg`}
                          alt="icon-dashboard"
                          width={1000}
                          height={720}
                        />
                      )
                    } else
                      if (v == (props.language === 'en' ? 'Repair' : 'Reparo')) {
                        return (
                          <Image
                            src={`/game-img/whitepaper/${props.language}/Slide22.svg`}
                            alt="icon-dashboard"
                            width={1000}
                            height={720}
                          />
                        )
                      } else
                        if (v == (props.language === 'en' ? 'Rewards' : 'Recompensas')) {
                          return (
                            <Image
                              src={`/game-img/whitepaper/${props.language}/Slide23.svg`}
                              alt="icon-dashboard"
                              width={1000}
                              height={720}
                            />
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
        <span className="text-4xl font-PassionOne">Whitepaper</span>
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
          <div className="flex flex-col text-left cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Introduction 1/3' : 'Introdução 1/3') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Previous' : 'Anterior'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Introduction 1/3' : 'Introdução 1/3') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1]}</span>
          </div>
          <div className="flex flex-col text-right cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Rewards' : 'Recompensas') ? options[0] : options[options.indexOf(selectedOption) + 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Next' : 'Próximo'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Rewards' : 'Recompensas') ? options[0] : options[options.indexOf(selectedOption) + 1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}