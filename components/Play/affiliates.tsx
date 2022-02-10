import { useEffect, useState } from "react";
import CardStaking from "../CardStaking";

interface AffiliatesProps {
  contract: any
  address: string
  checkBalance: () => void
}

export default function Affiliates(props: AffiliatesProps) {

  const[maximumRelationship, setMaximumRelationship] = useState(0)

  useEffect(() => {
    props.contract.methods.maximumRelationshipBonus(props.address).call().then((bonus: number) => {
      setMaximumRelationship(bonus / 100000000)
    }).catch((err: string) => console.log(err))
  }, [])

  return (
    <div className="flex flex-col gap-3 text p-2 -mt-2">
      <div className="font-PassionOne text-center">
        YOUR PERSONAL IGC SAVINGS ACCOUNT {maximumRelationship}
      </div>
      <div>
        <div className="bg-[#85E2A5] bg-opacity-70 font-PassionOne rounded-t-lg
              flex justify-center items-center h-10 text-xl">
          IGC RECOVER
        </div>
        <div className="flex flex-col bg-[#272727] font-PassionOne bg-opacity-70
              rounded-b-lg gap-2">
        </div>
      </div>
    </div>
  )
}