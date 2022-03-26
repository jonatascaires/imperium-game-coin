import Image from "next/image";

interface FooterProps {
  setActivePage: (v: number) => void
  language: string
  contractAddress?: string
}

export default function Footer(props: FooterProps) {

  console.log(props.contractAddress)
  let hidden = props.contractAddress === '0x5B194CDd962E57aCfF90AA41F4c9153eEB3b6502' ? 'hidden' : ''

  return (
    <div className="flex justify-center gap-20 p-3">
      <div className="flex flex-col gap-0.5 text-base cursor-pointer" onClick={() => props.setActivePage(4)}>
        <Image
          src={`/game-img/menu-affiliates.svg`}
          alt="icon-dashboard"
          width={25}
          height={25}
        />
        <span className="text-lg font-PassionOne">{props.language === 'en' ? 'Affiliates' : 'Afiliados'}</span>
      </div>       
      <div className={`flex flex-col gap-0.5 text-base cursor-pointer ${hidden}`} onClick={() => props.setActivePage(5)}>
        <Image
          src={`/game-img/savings.svg`}
          alt="icon-dashboard"
          width={25}
          height={25}
        />
        <span className="text-lg font-PassionOne">{props.language === 'en' ? 'Savings' : 'Poupança'}</span>
      </div>
      <div className="flex flex-col gap-0.5 text-base cursor-pointer" onClick={() => props.setActivePage(12)}>
        <Image
          src={`/game-img/menu-staking.svg`}
          alt="icon-dashboard"
          width={25}
          height={25}
        />
        <span className="text-lg font-PassionOne">{props.language === 'en' ? 'Presale' : 'Pré-venda'}</span>
      </div>
    </div>
  )
}