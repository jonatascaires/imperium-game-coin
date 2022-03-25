import { useEffect, useState } from "react";
import CardRoad from "../CardRoad";

interface RoadProps {
  contract: any
  address: string
  checkBalance: () => void
  language?: string
}

export default function Road(props: RoadProps) {

  useEffect(() => {
    props.contract.methods.getTrucksByOwner(props.address).call().then((result: string[]) => {
      setIdtrucks(result)
    }).catch((err: string) => console.log(err))
  }, [])

  const [idTrucks, setIdtrucks] = useState([])

  function renderCard() {
    return idTrucks.map((item, index) => {
      return <CardRoad idTruck={parseInt(item)} contract={props.contract} address={props.address} key={index} checkBalance={props.checkBalance} language={props.language} />
    })
  }

  return (
    <div className="grid grid-cols-2 gap-6 animate__animated animate__fadeIn">
      {renderCard()}
    </div>
  )
}