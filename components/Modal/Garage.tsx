import { useEffect, useState } from "react";
import CardGarage from "./CardGarage";

interface PropsGarage {
  contract: any
  address: string
  updateBalance: () => void
}

export default function Garage(props: PropsGarage) {

  useEffect(() => {
    props.contract.methods.getTrucksByOwner(props.address).call().then((result: string[]) => {
      setIdtrucks(result)
    }).catch((err: string) => console.log(err))
  }, [])

  const [idTrucks, setIdtrucks] = useState([])

  function renderCard() {
    return idTrucks.map((item, index) => {
      return (
        <div className="p-2 -mt-1">
          <CardGarage idTruck={parseInt(item)} contract={props.contract} address={props.address} key={index} updateBalance={props.updateBalance} />
        </div>
      )
    })
  }

  return (
    <div className="flex flex-col gap-3 ">
      {renderCard()}
    </div>
  )
}