import TransitBoard from "./TransitBoard";
import Fuel from "./Fuel";
import Repair from "./Repair";
import Rescue from "./Rescue";
import Truck from "./Truck";
import { useState } from "react";

interface PropsCardGarage {
  idTruck: number
  contract: any
  address: string
  updateBalance: () => void
}

export default function CardGarage(props: PropsCardGarage) {

  const [enableBtnToFuel, setEnableBtnToFuel] = useState(false)
  const [enableBtnRepair, setEnableBtnRepair] = useState(false)
  const [enableBtnRescue, setEnableBtnRescue] = useState(false)

  const [renderAgain, setRenderAgain] = useState(0)

  return (
    <div className={`grid grid-cols-4 gap-7 bg-[#003354] border-2 border-[#113C57] ${(!enableBtnToFuel && !enableBtnRepair && !enableBtnRescue) && 'hidden'}`}>
      <Truck idTruck={props.idTruck} contract={props.contract} address={props.address} updateBalance={props.updateBalance} setRenderAgain={setRenderAgain} />
      <Fuel idTruck={props.idTruck} contract={props.contract} updateBalance={props.updateBalance} address={props.address} enableBtnToFuel={setEnableBtnToFuel} enableBtnRepair={enableBtnRepair} setRenderAgain={setRenderAgain} />
      <Repair idTruck={props.idTruck} contract={props.contract} updateBalance={props.updateBalance} address={props.address} enableBtnRepair={setEnableBtnRepair} renderAgain={renderAgain} setRenderAgain={setRenderAgain} />
      <Rescue idTruck={props.idTruck} contract={props.contract} updateBalance={props.updateBalance} address={props.address} enableBtnRescue={setEnableBtnRescue} enableBtnToFuel={enableBtnToFuel} enableBtnRepair={enableBtnRepair} setRenderAgain={setRenderAgain} />
    </div>
  )
}