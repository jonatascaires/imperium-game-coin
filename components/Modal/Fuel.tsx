import { useState } from "react";
import Notify from "../Notify";
import BtnGarage from "./BtnGarage";
import Indicator from "./Indicator";

interface PropsFuel {
  idTruck: number
  contract: any
  updateBalance: () => void
  address: string
  enableBtnToFuel: (v: boolean) => void
  enableBtnRepair: boolean
  setRenderAgain: (v: number) => void
}

export default function Fuel(props: PropsFuel) {

  const notify = Notify()

  if (props.contract) {
    props.contract.methods.trucks(props.idTruck).call().then((result: any) => {
      setName(result.name)
      setFuelTime(parseInt(result.fuelTime + '000'))
    }).catch((err: string) => console.log(err))
  }

  function toFuel(value: number) {
    if (props.contract) {
      setLoading(true)
      props.contract.methods.toFuel(value).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.ToFuelEvent.returnValues.message, 'success')
        setLoading(false)
        props.updateBalance()
        props.setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoading(false)
      })
    }
  }

  const [name, setName] = useState('')
  const [fuelTime, setFuelTime] = useState(0)
  const enableBtnToFuel = new Date(Date.now()) > new Date(fuelTime)
  props.enableBtnToFuel(enableBtnToFuel)
  const [loading, setLoading] = useState(false)

  const countTimeToFuel = () => {
    let maxTime = 0
    if (name === 'Silver') {
      maxTime = 9
    } else
      if (name === 'Gold') {
        maxTime = 7
      } else
        if (name === 'Ruby') {
          maxTime = 5
        }
    let time = fuelTime > Date.now() ? Math.floor((((fuelTime - Date.now()) / 1000) / 60)) : 0
    if (time > 0) {
      return (Math.floor(((time / maxTime) * 100) / 5))
    } else {
      return 0
    }
  }

  return (
    <div className="flex-col justify-center items-center">
      <Indicator name="fuel" count={countTimeToFuel()} color="red" />
      <BtnGarage btnName="tofuel" enable={enableBtnToFuel && !props.enableBtnRepair} idTruck={props.idTruck} click={toFuel} loading={loading} />
    </div>
  )
}