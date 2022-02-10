import { useState } from "react";
import Notify from "../Notify";
import Card from "./Card";

interface PropsShop {
  contract: any
  code: number
  address: string
  updateBalance: () => void
}

export default function Shop(props: PropsShop) {

  const notify = Notify()
  const [loading, setLoading] = useState(false)

  function BuyTruck(value: number) {
    if (props.contract) {
      setLoading(true)
      props.contract.methods.buyTruck(value, props.code).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.NewTruck.returnValues.message, 'success')
        props.updateBalance()
        setLoading(false)
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoading(false)
      })
    }
  }

  return (
    <div className="space-y-5 sm:space-y-0 sm:flex justify-center items-center sm:gap-8">
      <Card name="silver" value={100} onClick={() => BuyTruck(100)} loading={loading} />
      <Card name="gold" value={250} onClick={() => BuyTruck(250)} loading={loading} />
      <Card name="ruby" value={600} onClick={() => BuyTruck(600)} loading={loading} />
    </div>
  )
}