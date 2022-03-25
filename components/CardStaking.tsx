import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Notify from "./Notify";

interface CardStakingProps {
  id: number
  contract: any
  address: string
  checkBalance: () => void
  language?: string
}

export default function CardStaking(props: CardStakingProps) {

  //time testnet = 60
  //time mainnet = 86400

  const notify = Notify()

  const [estimatedReturn, setEstimatedReturn] = useState(0)
  const [timeLocked, setTimeLocked] = useState(0)
  const [apy, setApy] = useState(0)
  const [rescue, setRescue] = useState(true)

  const [loadingRescue, setLoadingRescue] = useState(false)
  const [renderAgainRescue, setRenderAgainRescue] = useState(0)

  const [loadingPage, setLoadingPage] = useState(true)

  function StakingRescue(id: number) {
    if (props.contract) {
      setLoadingRescue(true)
      props.contract.methods.stakingRescue(id).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.StakingRescueEvent.returnValues.message, 'success')
        props.checkBalance()
        setLoadingRescue(false)
        setRenderAgainRescue(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoadingRescue(false)
      })
    }
  }

  useEffect(() => {
    props.contract.methods.staking(props.id).call().then((result: any) => {
      setEstimatedReturn(result.estimatedReturn)
      setTimeLocked(parseInt(result.timeLocked + '000'))
      setApy(result.apy)
      setRescue(result.rescue)
      setLoadingPage(false)
    }).catch((err: string) => console.log(err))
  }, [renderAgainRescue])


  const countTimeLocked = () => {
    let maxTimeLocked = 0
    if (apy == 10) {
      maxTimeLocked = 15
    } else
      if (apy == 20) {
        maxTimeLocked = 30
      } else
        if (apy == 30) {
          maxTimeLocked = 90
        } else
          if (apy == 40) {
            maxTimeLocked = 180
          } else
            if (apy == 50) {
              maxTimeLocked = 360
            }
    let lockedTime = timeLocked > Date.now() ? Math.floor((((timeLocked - Date.now()) / 1000) / 60)) : 0
    if (lockedTime > 0) {
      return (Math.floor((lockedTime / maxTimeLocked) * 100))
    } else {
      return 0
    }
  }

  const enableBtnRescue = timeLocked > 0 ? new Date(Date.now()) > new Date(timeLocked) : false

  if (loadingPage)
    return (
      <div className="flex justify-center items-center mt-3 gap-5 mx-2">
        <ReactLoading type="bubbles" width={25} className="-mb-9" />
      </div>
    )
  else if (rescue) {
    return <></>
  } else {
    return (
      <div className="flex justify-between items-center mt-3 gap-5 mx-2">
        <div>{(estimatedReturn / 100000000)} IGC</div>
        <div className="rounded-lg w-[100px] h-5 bg-[#1C1C1C] bg-opacity-70">
          <div className={`relative rounded-lg h-5 bg-[#85E2A5]`} style={{ width: `${100 - countTimeLocked()}%` }}></div>
        </div>
        <div className={`flex items-center justify-center h-7 w-20 rounded-lg 
            bg-[#1C1C1C] border border-[#85E2A5] font-PassionOne text-lg ${enableBtnRescue ? 'cursor-pointer animate-pulse' : 'opacity-30 cursor-not-allowed animate-none'}`}
          onClick={() => (!loadingRescue && enableBtnRescue) && StakingRescue(props.id)}
        >
          {loadingRescue ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> :
            <div>{props.language === 'en' ? 'Recover' : 'Recuperar'}</div>}
        </div>
      </div>
    )
  }
}