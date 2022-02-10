import { useEffect, useState } from "react";
import CardStaking from "../CardStaking";

interface StakingRecoverProps {
  contract: any
  address: string
  checkBalance: () => void
}

export default function StakingRescue(props: StakingRecoverProps) {

  useEffect(() => {
    props.contract.methods.getStakingByOwner(props.address).call().then((result: string[]) => {
      setIdStaking(result)
    }).catch((err: string) => console.log(err))
  }, [])

  const [idStaking, setIdStaking] = useState([])

  function renderSavings() {
    return idStaking.map((id, index) => {
      return <CardStaking id={id} contract={props.contract} address={props.address} checkBalance={props.checkBalance} key={index} />
    })
  }

  return (
    <div className="flex flex-col gap-3 text p-2 -mt-2">
      <div className="font-PassionOne text-center">
        YOUR PERSONAL IGC SAVINGS ACCOUNT
      </div>
      <div>
        <div className="bg-[#85E2A5] bg-opacity-70 font-PassionOne rounded-t-lg
              flex justify-center items-center h-10 text-xl">
          IGC RECOVER
        </div>
        <div className="flex flex-col bg-[#272727] font-PassionOne bg-opacity-70
              rounded-b-lg gap-2">
          {renderSavings()}
        </div>
      </div>
    </div>
  )
}