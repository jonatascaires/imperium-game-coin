import { useState } from "react";
import Notify from "../Notify";
import BtnGarage from "./BtnGarage";
import Indicator from "./Indicator";

interface PropsRepair {
  idTruck: number
  contract: any
  updateBalance: () => void
  address: string
  enableBtnRepair: (v: boolean) => void
  renderAgain: number
  setRenderAgain: (v: number) => void
}

export default function Repair(props: PropsRepair) {

  const notify = Notify()

  function repair(value: number) {
    if (props.contract) {
      setLoading(true)
      props.contract.methods.repair(value).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.RepairEvent.returnValues.message, 'success')
        setLoading(false)
        props.updateBalance()
        props.setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoading(false)
      })
    }
  }

  props.contract.methods.trucks(props.idTruck).call().then((result: any) => {
    setName(result.name)
    setRepairTime(parseInt(result.repairTime + '000'))
  }).catch((err: string) => console.log(err))

  const [name, setName] = useState('')
  const [repairTime, setRepairTime] = useState(0)
  const [loading, setLoading] = useState(false)
  const enableBtnRepair = new Date(Date.now()) > new Date(repairTime)
  props.enableBtnRepair(enableBtnRepair)

  const countTimeRepair = () => {
    let maxTime = 0
    if (name === 'Silver') {
      maxTime = 150
    } else
      if (name === 'Gold') {
        maxTime = 144
      } else
        if (name === 'Ruby') {
          maxTime = 114
        }
    let time = repairTime > Date.now() ? Math.floor((((repairTime - Date.now()) / 1000) / 60)) : 0
    if (time > 0) {
      return (Math.floor(((time / maxTime) * 100) / 5))
    } else {
      return 0
    }
  }

  return (
    <div className="flex-col justify-center items-center">
      <Indicator name="repair" count={countTimeRepair()} color="orange" />
      <BtnGarage btnName="repair" enable={enableBtnRepair} idTruck={props.idTruck} click={repair} loading={loading} />
    </div>
  )
}