import Image from "next/image"
import { useState } from "react"
import BuyButton from "../components/Buttons/BuyButton"
import Notify from "./Notify"

interface CardShopProps {
  truckOption: number
  contract: any
  address: string
  code: number
  checkBalance: () => void
  language?: string
}

export default function CardShop(props: CardShopProps) {

  const notify = Notify()

  let truckName = ""
  let fuel = 0
  let reward = 0
  let repair = 0
  let img = ""
  let value = 0
  if (props.truckOption === 3) {
    truckName = props.language === 'en' ? "Epic" : "Épico"
    fuel = 5
    reward = 6
    repair = 114
    value = 600
    img = "/game-img/NFT/epic-1.png"
  } else
    if (props.truckOption === 2) {
      truckName = props.language === 'en' ? "Rare" : 'Raro'
      fuel = 7
      reward = 8
      repair = 144
      value = 250
      img = "/game-img/NFT/rare-1.png"
    } else {
      truckName = props.language === 'en' ? "Common" : "Comum"
      fuel = 9
      reward = 10
      repair = 150
      value = 100
      img = "/game-img/NFT/common-1.png"
    }

  const [loading, setLoading] = useState(false)

  function BuyTruck(value: number) {
    if (props.contract) {
      setLoading(true)
      props.contract.methods.buyTruck(value, props.code).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.NewTruck.returnValues.message, 'success')
        props.checkBalance()
        setLoading(false)
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoading(false)
      })
    }
  }

  return (
    <div className="bg-[#272727] bg-opacity-70 rounded-lg text-center 
        flex flex-col items-center gap-1.5">
      <span className="text-2xl font-PassionOne mt-1">{truckName}</span>
      <div className="w-3/4 bg-[#1C1C1C] bg-opacity-70 rounded-2xl">
        <Image
          src={img}
          alt="icon-dashboard"
          width={170}
          height={170}
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex">
          <Image
            src={`/game-img/fuel-icon.svg`}
            alt="time-icon"
            width={35}
            height={35}
          />
          <div className="flex flex-col text-left">
            <span className="text-[#797979] text-sm font-PassionOne">{props.language === 'en' ? 'Fuel' : 'Combustível'}</span>
            <span className="text-xl font-PassionOne -mt-2">{fuel} {props.language === 'en' ? 'days' : 'dias'}</span>
          </div>
        </div>
        <div className="flex">
          <Image
            src={`/game-img/repair-icon.svg`}
            alt="time-icon"
            width={35}
            height={35}
          />
          <div className="flex flex-col text-left">
            <span className="text-[#797979] text-sm font-PassionOne">{props.language === 'en' ? 'Repair' : 'Reparo'}</span>
            <span className="text-xl font-PassionOne -mt-2">{repair} {props.language === 'en' ? 'days' : 'dias'}</span>
          </div>
        </div>
        <div className="flex">
          <Image
            src={`/game-img/reward-icon.svg`}
            alt="time-icon"
            width={35}
            height={35}
          />
          <div className="flex flex-col text-left">
            <span className="text-[#797979] text-sm font-PassionOne">{props.language === 'en' ? 'Reward' : 'Recompensa'}</span>
            <span className="text-xl font-PassionOne -mt-2">{reward} {props.language === 'en' ? 'days' : 'dias'}</span>
          </div>
        </div>
      </div>
      <div className="my-2 animate-pulse">
        <BuyButton action={() => BuyTruck(value)} language={props.language} loading={loading}>{props.language === 'en' ? `Buy for ${value} IGC` : `Compre por ${value} IGC`}</BuyButton>
      </div>
    </div>
  )
}