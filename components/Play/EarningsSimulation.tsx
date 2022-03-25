import Image from "next/image";
import { useEffect, useState } from "react";

interface EarningsSimulationProps {
  setActivePage: (v: number) => void
  selectOption: string
  language?: string
}

export default function EarningsSimulation(props: EarningsSimulationProps) {

  const en = ['Common type simulation 1/3', 'Common type simulation 2/3', 'Common type simulation 3/3', 'Rare type simulation 1/4', 'Rare type simulation 2/4', 'Rare type simulation 3/4', 'Rare type simulation 4/4', 'Epic type simulation 1/5', 'Epic type simulation 2/5', 'Epic type simulation 3/5', 'Epic type simulation 4/5', 'Epic type simulation 5/5']
  const br = ['Simulação de tipo comum 1/3', 'Simulação de tipo comum 2/3', 'Simulação de tipo comum 3/3', 'Simulação de tipo raro 1/4', 'Simulação de tipo raro 2/4', 'Simulação de tipo raro 3/4', 'Simulação de tipo raro 4/4', 'Simulação de tipo épico 1/5', 'Simulação de tipo épico 2/5', 'Simulação de tipo épico 3/5', 'Simulação de tipo épico 4/5', 'Simulação de tipo épico 5/5']

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
    if (v == (props.language === 'en' ? 'Common type simulation 1/3' : 'Simulação de tipo comum 1/3')) {
      return (
        <Image
          src={`/game-img/whitepaper/${props.language}/Slide8.svg`}
          alt="icon-dashboard"
          width={1000}
          height={720}
        />
      )
    } else
      if (v == (props.language === 'en' ? 'Common type simulation 2/3' : 'Simulação de tipo comum 2/3')) {
        return (
          <Image
            src={`/game-img/whitepaper/${props.language}/Slide9.svg`}
            alt="icon-dashboard"
            width={1000}
            height={720}
          />
        )
      } else
        if (v == (props.language === 'en' ? 'Common type simulation 3/3' : 'Simulação de tipo comum 3/3')) {
          return (
            <Image
              src={`/game-img/whitepaper/${props.language}/Slide10.svg`}
              alt="icon-dashboard"
              width={1000}
              height={720}
            />
          )
        } else
          if (v == (props.language === 'en' ? 'Rare type simulation 1/4' : 'Simulação de tipo raro 1/4')) {
            return (
              <Image
                src={`/game-img/whitepaper/${props.language}/Slide11.svg`}
                alt="icon-dashboard"
                width={1000}
                height={720}
              />
            )
          } else
            if (v == (props.language === 'en' ? 'Rare type simulation 2/4' : 'Simulação de tipo raro 2/4')) {
              return (
                <Image
                  src={`/game-img/whitepaper/${props.language}/Slide12.svg`}
                  alt="icon-dashboard"
                  width={1000}
                  height={720}
                />
              )
            } else
              if (v == (props.language === 'en' ? 'Rare type simulation 3/4' : 'Simulação de tipo raro 3/4')) {
                return (
                  <Image
                    src={`/game-img/whitepaper/${props.language}/Slide13.svg`}
                    alt="icon-dashboard"
                    width={1000}
                    height={720}
                  />
                )
              } else
                if (v == (props.language === 'en' ? 'Rare type simulation 4/4' : 'Simulação de tipo raro 4/4')) {
                  return (
                    <Image
                      src={`/game-img/whitepaper/${props.language}/Slide14.svg`}
                      alt="icon-dashboard"
                      width={1000}
                      height={720}
                    />
                  )
                } else
                  if (v == (props.language === 'en' ? 'Epic type simulation 1/5' : 'Simulação de tipo épico 1/5')) {
                    return (
                      <Image
                        src={`/game-img/whitepaper/${props.language}/Slide15.svg`}
                        alt="icon-dashboard"
                        width={1000}
                        height={720}
                      />
                    )
                  } else
                    if (v == (props.language === 'en' ? 'Epic type simulation 2/5' : 'Simulação de tipo épico 2/5')) {
                      return (
                        <Image
                          src={`/game-img/whitepaper/${props.language}/Slide16.svg`}
                          alt="icon-dashboard"
                          width={1000}
                          height={720}
                        />
                      )
                    } else
                      if (v == (props.language === 'en' ? 'Epic type simulation 3/5' : 'Simulação de tipo épico 3/5')) {
                        return (
                          <Image
                            src={`/game-img/whitepaper/${props.language}/Slide17.svg`}
                            alt="icon-dashboard"
                            width={1000}
                            height={720}
                          />
                        )
                      } else
                        if (v == (props.language === 'en' ? 'Epic type simulation 4/5' : 'Simulação de tipo épico 4/5')) {
                          return (
                            <Image
                              src={`/game-img/whitepaper/${props.language}/Slide18.svg`}
                              alt="icon-dashboard"
                              width={1000}
                              height={720}
                            />
                          )
                        } else
                          if (v == (props.language === 'en' ? 'Epic type simulation 5/5' : 'Simulação de tipo épico 5/5')) {
                            return (
                              <Image
                                src={`/game-img/whitepaper/${props.language}/Slide19.svg`}
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
        <span className="text-4xl font-PassionOne">{props.language === 'en' ? 'Earnings simulation' : 'Simulação de ganhos'}</span>
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
          <div className="flex flex-col text-left cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Common type simulation 1/3' : 'Simulação de tipo comum 1/3') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Previous' : 'Anterior'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Common type simulation 1/3' : 'Simulação de tipo comum 1/3') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1]}</span>
          </div>
          <div className="flex flex-col text-right cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Epic type simulation 5/5' : 'Simulação de tipo épico 5/5') ? options[0] : options[options.indexOf(selectedOption) + 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Next' : 'Próximo'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Epic type simulation 5/5' : 'Simulação de tipo épico 5/5') ? options[0] : options[options.indexOf(selectedOption) + 1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}