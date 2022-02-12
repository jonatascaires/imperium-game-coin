import { useEffect, useState } from "react";
import CardGarage from "../CardGarage";

interface GarageProps {
  contract: any
  address: string
  checkBalance: () => void
}

export default function Garage(props: GarageProps) {

  useEffect(() => {
    props.contract.methods.getTrucksByOwner(props.address).call().then((result: string[]) => {
      setIdtrucks(result)
    }).catch((err: string) => console.log(err))
  }, [])

  const [idTrucks, setIdtrucks] = useState([])

  function renderCard() {
    return idTrucks.map((item, index) => {
      return <CardGarage idTruck={parseInt(item)} contract={props.contract} address={props.address} key={index} checkBalance={props.checkBalance} />
    })
  }

  return (
    <div className="flex flex-col gap-3 items-center animate__animated animate__fadeIn">
      {renderCard()}
    </div>
  )
}