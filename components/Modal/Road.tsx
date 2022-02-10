import { useEffect, useState } from "react";
import TruckRoad from "./TruckRoad";

interface PropsRoad {
  contract: any
  address: string
  updateBalance: () => void
}

export default function Road(props: PropsRoad) {

  useEffect(() => {
    props.contract.methods.getTrucksByOwner(props.address).call().then((result: string[]) => {
      setIdtrucks(result)
    }).catch((err: string) => console.log(err))
  }, [])

  const [idTrucks, setIdtrucks] = useState([])

  function renderCard() {
    return idTrucks.map((item, index) => {
      return (
        <TruckRoad idTruck={item} contract={props.contract} address={props.address} updateBalance={props.updateBalance} key={index} />
      )
    })
  }

  return (
    <div className="flex flex-col gap-3 ">
      {renderCard()}
    </div>
  )
}