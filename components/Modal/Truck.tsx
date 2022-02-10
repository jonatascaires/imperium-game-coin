import Image from "next/image";
import { useState } from "react";
import Notify from "../Notify";
import MiniTruck from "./MiniTruck";
import ReactLoading from "react-loading";

interface PropsTruck {
  contract: any
  idTruck: number
  address: string
  updateBalance: () => void
  setRenderAgain: (v: number) => void
}

export default function Truck(props: PropsTruck) {

  const notify = Notify()

  function upgrade(value: number) {
    if (props.contract) {
      setLoading(true)
      props.contract.methods.truckUpgrade(value).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.TruckUpgradeEvent.returnValues.message, 'success')
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
      setUniqueId(result.uniqueId)
      setLevel(result.level)
    }).catch((err: string) => console.log(err))
  }

  const [loading, setLoading] = useState(false)

  const [name, setName] = useState('')
  const [uniqueId, setUniqueId] = useState(0)
  const [level, setLevel] = useState(0)

  return (
    <div className="flex-col justify-center items-center mt-1">
      {loading ?
        <div className="sticky flex gap-1 z-50 right-8 justify-center mt-2 mb-1">
          <ReactLoading type="spokes" color="#3EE2EB" />
        </div>
        :
        <>
          <div className="sticky -mb-5 flex justify-end gap-1 z-20 cursor-pointer">
            <div className="font-bold text-xl">{level}</div>
            <Image
              src={`/upgrade.svg`}
              alt=""
              width={25}
              height={25}
              onClick={() => upgrade(props.idTruck)}
            />
          </div>
          <MiniTruck name={name.toLowerCase()} />
        </>
      }
      <div className="text-center">{name[0]}-{uniqueId}</div>
    </div>
  )
}