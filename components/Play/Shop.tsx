import Image from "next/image";
import CardShop from "../CardShop";
import { useState } from "react";

interface ShopProps {
  contract: any
  address: string
  code: number
  checkBalance: () => void
}

export default function Shop(props: ShopProps) {

  const [truckOption, setTruckOption] = useState(1)

  return (
    <div className="relative p-2">
      <CardShop truckOption={truckOption} contract={props.contract} address={props.address} code={props.code} checkBalance={props.checkBalance} />
      <div className="absolute left-7 top-32 cursor-pointer"
        onClick={() => setTruckOption((truckOption - 1) < 1 ? 3 : truckOption - 1)}>
        <Image
          src={`/game-img/back.svg`}
          alt="back"
          width={14}
          height={24}
        />
      </div>
      <div className="absolute right-7 top-32 cursor-pointer"
        onClick={() => setTruckOption((truckOption + 1) > 3 ? 1 : truckOption + 1)}>
        <Image
          src={`/game-img/next.svg`}
          alt="next"
          width={14}
          height={24}
        />
      </div>
    </div>
  )
}