import { useState } from "react"
import Notify from "../Notify"
import BtnGarage from "./BtnGarage"

interface PropsRescue {
  contract: any
  address: string
  idTruck: number
  updateBalance: () => void
  enableBtnToFuel: boolean
  enableBtnRepair: boolean
  setRenderAgain: (v: number) => void
  enableBtnRescue: (v: boolean) => void
}

export default function Rescue(props: PropsRescue) {

  const notify = Notify()

  function harvest(value: number) {
    if (props.contract) {
      setLoading(true)
      props.contract.methods.harvest(value).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.HavestEvent.returnValues.message, 'success')
        setLoading(false)
        props.updateBalance()
        props.setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoading(false)
      })
    }
  }

  if (props.contract) {
    props.contract.methods.trucks(props.idTruck).call().then((result: any) => {
      setName(result.name)
      setRescueTime(parseInt(result.harvestTime + '000'))
      setLevel(result.level)
    }).catch((err: string) => console.log(err))
  }

  const [name, setName] = useState('')
  const [rescueTime, setRescueTime] = useState(0)
  const [level, setLevel] = useState(0)
  const [loading, setLoading] = useState(false)

  const enableBtnRescue = new Date(Date.now()) > new Date(rescueTime)
  props.enableBtnRescue(enableBtnRescue)

  const countTimeRescue = () => {
    let maxTime = 0
    let valueRescue = 0
    if (name === 'Silver') {
      maxTime = 10
      valueRescue = 75 * 1
    } else
      if (name === 'Gold') {
        maxTime = 8
        valueRescue = 105 * 1
      } else
        if (name === 'Ruby') {
          maxTime = 6
          valueRescue = 155 * 1
        }
    let time = rescueTime > Date.now() ? Math.floor((((rescueTime - Date.now()) / 1000) / 60)) : 0
    if (time > 0) {
      return [((valueRescue * level) / 100) * (100 - (Math.floor(((time / maxTime) * 100)))), valueRescue * level]
    } else {
      return [valueRescue * level, valueRescue * level]
    }
  }

  return (
    <div className="flex-col justify-center items-center">
      <div className="text-center text-3xl mt-[14px]">{props.enableBtnToFuel ?
        <div className="text-lg mb-[24px]">
          waiting for fuel
          </div> : <div className="mb-[16px]">
          {Math.floor(countTimeRescue()[0])}/{Math.floor(countTimeRescue()[1])}
        </div>}
      </div>
      <BtnGarage btnName="rescue" enable={enableBtnRescue && !props.enableBtnToFuel && !props.enableBtnRepair} className="mt-[10px]" idTruck={props.idTruck} click={harvest} loading={loading} />
    </div>
  )
}