import Image from "next/image";
import { useEffect, useState } from "react";

interface TokenomicsProps {
  setActivePage: (v: number) => void
  selectOption: string
  language?: string
}

export default function Tokenomics(props: TokenomicsProps) {

  const en = ['Tokenomics']
  const br = ['Tokenomics']

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

    if (v == (props.language === 'en' ? 'Tokenomics' : 'Tokenomics')) {
      return (
        props.language == 'en' ?
        <Image
          src={`/game-img/tokenomics_en.png`}
          alt="icon-dashboard"
          width={1000}
          height={720}
        />
        :
        <Image
          src={`/game-img/tokenomics_br.png`}
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
        <span className="text-4xl font-PassionOne">{props.language === 'en' ? 'Tokenomics' : 'Tokenomics'}</span>
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
          <div className="flex flex-col text-left cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Tokenomics' : 'Tokenomics') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Previous' : 'Anterior'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Tokenomics' : 'Tokenomics') ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1]}</span>
          </div>
          <div className="flex flex-col text-right cursor-pointer" onClick={() => setSelectedOption(selectedOption == (props.language === 'en' ? 'Tokenomics' : 'Tokenomics') ? options[0] : options[options.indexOf(selectedOption) + 1])}>
            <span className="text-base text-[#F28B0C] opacity-70">{props.language === 'en' ? 'Next' : 'Próximo'}</span>
            <span className="text-xl -mt-2">{selectedOption == (props.language === 'en' ? 'Tokenomics' : 'Tokenomics') ? options[0] : options[options.indexOf(selectedOption) + 1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}