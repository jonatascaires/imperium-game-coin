import Image from "next/image";
import { useEffect, useState } from "react";

interface WhitepaperProps {
  setActivePage: (v: number) => void
  selectOption: string
  language?: string
}

export default function Whitepaper(props: WhitepaperProps) {

  const en = ['Introduction 1/3', 'Introduction 2/3', 'Introduction 3/3', 'Token IGC', 'Savings', 'The game 1/2', 'The game 2/2', 'Earnings simulation 1/12', 'Earnings simulation 2/12', 'Earnings simulation 3/12', 'Earnings simulation 4/12', 'Earnings simulation 5/12', 'Earnings simulation 6/12', 'Earnings simulation 7/12', 'Earnings simulation 8/12', 'Earnings simulation 9/12', 'Earnings simulation 10/12', 'Earnings simulation 11/12', 'Earnings simulation 12/12', 'Truck upgrade', 'Truck maintenance 1/2', 'Truck maintenance 2/2', 'Rewards', 'Affiliate program', 'Developer']
  const br = ['Introdução 1/3', 'Introdução 2/3', 'Introdução 3/3', 'Token IGC', 'Poupança', 'O jogo 1/2', 'O jogo 2/2', 'Simulação de ganhos 1/12', 'Simulação de ganhos 2/12', 'Simulação de ganhos 3/12', 'Simulação de ganhos 4/12', 'Simulação de ganhos 5/12', 'Simulação de ganhos 6/12', 'Simulação de ganhos 7/12', 'Simulação de ganhos 8/12', 'Simulação de ganhos 9/12', 'Simulação de ganhos 10/12', 'Simulação de ganhos 11/12', 'Simulação de ganhos 12/12', 'Upgrade do caminhão', 'Manutenção do caminhão 1/2', 'Manutenção do caminhão 2/2', 'Recompensas', 'Programa de afiliados', 'Desenvolvedor']

  const options = props.language === 'en' ? en : br

  const [selectedOption, setSelectedOption] = useState(props.selectOption)

  useEffect(() => {
    let newOption = selectedOption
    if(options.indexOf(newOption) == -1){
      if(props.language == 'en'){
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
              if (v == (props.language === 'en' ? 'The game 1/2' : 'O jogo 1/2')) {
                return (
                  <Image
                    src={`/game-img/whitepaper/${props.language}/Slide6.svg`}
                    alt="icon-dashboard"
                    width={1000}
                    height={720}
                  />
                )
              } else
                if (v == (props.language === 'en' ? 'The game 2/2' : 'O jogo 2/2')) {
                  return (
                    <Image
                      src={`/game-img/whitepaper/${props.language}/Slide7.svg`}
                      alt="icon-dashboard"
                      width={1000}
                      height={720}
                    />
                  )
                } else
                  if (v == (props.language === 'en' ? 'Earnings simulation 1/12' : 'Simulação de ganhos 1/12')) {
                    return (
                      <Image
                        src={`/game-img/whitepaper/${props.language}/Slide8.svg`}
                        alt="icon-dashboard"
                        width={1000}
                        height={720}
                      />
                    )
                  } else
                    if (v == (props.language === 'en' ? 'Earnings simulation 2/12' : 'Simulação de ganhos 2/12')) {
                      return (
                        <Image
                          src={`/game-img/whitepaper/${props.language}/Slide9.svg`}
                          alt="icon-dashboard"
                          width={1000}
                          height={720}
                        />
                      )
                    } else
                      if (v == (props.language === 'en' ? 'Earnings simulation 3/12' : 'Simulação de ganhos 3/12')) {
                        return (
                          <Image
                            src={`/game-img/whitepaper/${props.language}/Slide10.svg`}
                            alt="icon-dashboard"
                            width={1000}
                            height={720}
                          />
                        )
                      } else
                        if (v == (props.language === 'en' ? 'Earnings simulation 4/12' : 'Simulação de ganhos 4/12')) {
                          return (
                            <Image
                              src={`/game-img/whitepaper/${props.language}/Slide11.svg`}
                              alt="icon-dashboard"
                              width={1000}
                              height={720}
                            />
                          )
                        } else
                          if (v == (props.language === 'en' ? 'Earnings simulation 5/12' : 'Simulação de ganhos 5/12')) {
                            return (
                              <Image
                                src={`/game-img/whitepaper/${props.language}/Slide12.svg`}
                                alt="icon-dashboard"
                                width={1000}
                                height={720}
                              />
                            )
                          } else
                            if (v == (props.language === 'en' ? 'Earnings simulation 6/12' : 'Simulação de ganhos 6/12')) {
                              return (
                                <Image
                                  src={`/game-img/whitepaper/${props.language}/Slide13.svg`}
                                  alt="icon-dashboard"
                                  width={1000}
                                  height={720}
                                />
                              )
                            } else
                              if (v == (props.language === 'en' ? 'Earnings simulation 7/12' : 'Simulação de ganhos 7/12')) {
                                return (
                                  <Image
                                    src={`/game-img/whitepaper/${props.language}/Slide14.svg`}
                                    alt="icon-dashboard"
                                    width={1000}
                                    height={720}
                                  />
                                )
                              } else
                                if (v == (props.language === 'en' ? 'Earnings simulation 8/12' : 'Simulação de ganhos 8/12')) {
                                  return (
                                    <Image
                                      src={`/game-img/whitepaper/${props.language}/Slide15.svg`}
                                      alt="icon-dashboard"
                                      width={1000}
                                      height={720}
                                    />
                                  )
                                } else
                                  if (v == (props.language === 'en' ? 'Earnings simulation 9/12' : 'Simulação de ganhos 9/12')) {
                                    return (
                                      <Image
                                        src={`/game-img/whitepaper/${props.language}/Slide16.svg`}
                                        alt="icon-dashboard"
                                        width={1000}
                                        height={720}
                                      />
                                    )
                                  } else
                                    if (v == (props.language === 'en' ? 'Earnings simulation 10/12' : 'Simulação de ganhos 10/12')) {
                                      return (
                                        <Image
                                          src={`/game-img/whitepaper/${props.language}/Slide17.svg`}
                                          alt="icon-dashboard"
                                          width={1000}
                                          height={720}
                                        />
                                      )
                                    } else
                                      if (v == (props.language === 'en' ? 'Earnings simulation 11/12' : 'Simulação de ganhos 11/12')) {
                                        return (
                                          <Image
                                            src={`/game-img/whitepaper/${props.language}/Slide18.svg`}
                                            alt="icon-dashboard"
                                            width={1000}
                                            height={720}
                                          />
                                        )
                                      } else
                                        if (v == (props.language === 'en' ? 'Earnings simulation 12/12' : 'Simulação de ganhos 12/12')) {
                                          return (
                                            <Image
                                              src={`/game-img/whitepaper/${props.language}/Slide19.svg`}
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
                                            if (v == (props.language === 'en' ? 'Truck maintenance 1/2' : 'Manutenção do caminhão 1/2')) {
                                              return (
                                                <Image
                                                  src={`/game-img/whitepaper/${props.language}/Slide21.svg`}
                                                  alt="icon-dashboard"
                                                  width={1000}
                                                  height={720}
                                                />
                                              )
                                            } else
                                              if (v == (props.language === 'en' ? 'Truck maintenance 2/2' : 'Manutenção do caminhão 2/2')) {
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
                                                } else
                                                  if (v == (props.language === 'en' ? 'Affiliate program' : 'Programa de afiliados')) {
                                                    return (
                                                      <Image
                                                        src={`/game-img/whitepaper/${props.language}/Slide24.svg`}
                                                        alt="icon-dashboard"
                                                        width={1000}
                                                        height={720}
                                                      />
                                                    )
                                                  } else
                                                    if (v == (props.language === 'en' ? 'Developer' : 'Desenvolvedor')) {
                                                      return (
                                                        <Image
                                                          src={`/game-img/whitepaper/${props.language}/Slide25.svg`}
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
        <select className="text-xl text-blue-200 bg-transparent cursor-pointer"
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}>
          {options.map((opt, key) => <option className="bg-zinc-800 text-base" key={key} value={opt}>{opt}</option>)}
        </select>
        <div className="flex flex-col gap-4 overflow-y-auto h-[525px] p-3 text-base">
          {renderText(selectedOption)}
        </div>
        <div className="flex justify-between font-PassionOne -mt-3 px-2">
          <div className="flex flex-col text-left cursor-pointer" onClick={() => setSelectedOption(selectedOption == 'Introduction 1/3' ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1])}>
            <span className="text-base text-gray-500">{props.language === 'en' ? 'Previous' : 'Anterior'}</span>
            <span className="text-xl -mt-2">{selectedOption == 'Introduction 1/3' ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1]}</span>
          </div>
          <div className="flex flex-col text-right cursor-pointer" onClick={() => setSelectedOption(selectedOption == 'Developer' ? options[0] : options[options.indexOf(selectedOption) + 1])}>
            <span className="text-base text-gray-500">{props.language === 'en' ? 'Next' : 'Próximo'}</span>
            <span className="text-xl -mt-2">{selectedOption == 'Developer' ? options[0] : options[options.indexOf(selectedOption) + 1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}