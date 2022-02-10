import Image from "next/image";
import { useEffect, useState } from "react";
import CalendarBtn from "../CalendarBtn";
import ReactLoading from "react-loading";
import Notify from "../Notify";

interface StakingProps {
  contract: any
  address: string
  checkBalance: () => void
}

export default function Staking(props: StakingProps) {

  const notify = Notify()

  const [lockValue, setLockValue] = useState(250)
  const [daysSelected, setDaysSelected] = useState(15)
  const [loadingStaking, setLoadingStaking] = useState(false)
  const [renderAgainStaking, setRenderAgainStaking] = useState(0)

  const [totalLocked, setTotalLocked] = useState(0)

  useEffect(() => {
    props.contract.methods.valueLocked().call().then((totalLocked: number) => {
      setTotalLocked(totalLocked / 100000000)
    }).catch((err: string) => console.log(err))
  }, [renderAgainStaking])

  let apy = 0
  if (daysSelected == 15) {
    apy = 10
  } else
    if (daysSelected == 30) {
      apy = 20
    } else
      if (daysSelected == 90) {
        apy = 30
      } else
        if (daysSelected == 180) {
          apy = 40
        } else
          if (daysSelected == 360) {
            apy = 50
          }

  function StakingLocked() {
    if (props.contract) {
      setLoadingStaking(true)
      props.contract.methods.stakingLocked(lockValue, daysSelected).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.NewValueLocked.returnValues.message, 'success')
        props.checkBalance()
        setRenderAgainStaking(Math.random())
        setLoadingStaking(false)
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoadingStaking(false)
      })
    }
  }

  function renderCalendar() {
    const days = [15, 30, 90, 180, 360]
    return days.map((d, key) => {
      return (
        <CalendarBtn days={d} selected={daysSelected} setDaysSelected={setDaysSelected} key={key} />
      )
    })
  }

  return (
    <div className="flex flex-col gap-3 text p-2 -mt-2">
      <div className="font-PassionOne text-center">
        YOUR PERSONAL IGC SAVINGS ACCOUNT
      </div>
      <div>
        <div className="bg-[#A35FD9] bg-opacity-70 font-PassionOne rounded-t-lg
              flex justify-center items-center h-10 text-xl">
          TOTAL IGC LOCKED
        </div>
        <div className="flex justify-center items-center h-10 bg-[#272727] font-PassionOne bg-opacity-70
              rounded-b-lg">
          {totalLocked}
        </div>
      </div>
      <div>
        <div className="bg-[#6650EF] bg-opacity-70 font-PassionOne rounded-t-lg
      flex justify-center items-center h-10 text-xl">
          IGC SAVINGS
        </div>
        <div className="flex flex-col gap-5 justify-center items-center bg-[#272727] bg-opacity-70 rounded-b-lg p-3">
          <div className="flex justify-center items-center gap-2 font-PassionOne">
            <div className="cursor-pointer" onClick={() => lockValue > 250 && setLockValue(lockValue - 250)}>
              <Image
                src={`/game-img/remove.svg`}
                alt="icon-dashboard"
                width={30}
                height={30}
              />
            </div>
            <div className="flex flex-col justify-center items-center 
            font-PassionOne bg-[#1C1C1C] min-w-[128px] rounded-lg">
              <span className="text-sm">IGC TO LOCK</span>
              <span className="-mt-1 text-2xl">{lockValue}</span>
            </div>
            <div className="cursor-pointer" onClick={() => setLockValue(lockValue + 250)}>
              <Image
                src={`/game-img/add.svg`}
                alt="icon-dashboard"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center w-64 gap-3">
            {renderCalendar()}
          </div>
          <div className="flex gap-2">
            <Image
              src={`/game-img/gold.svg`}
              alt="icon-dashboard"
              width={35}
              height={35}
            />
            <div className="flex flex-col font-PassionOne text-left">
              <span className="text-base">MATURITY AMOUNT - (APY <span className="text-[#85E2A5]">{apy}%</span>)</span>
              <span className="text-2xl -mt-2">{(lockValue + ((((lockValue / 100) * apy) / 365) * daysSelected)).toFixed(0)} <span className="text-[#85E2A5]">(+{((((lockValue / 100) * apy) / 365) * daysSelected).toFixed(0)}) </span>IGC</span>
            </div>
          </div>
          <div className={`flex items-center justify-center h-8 w-24 rounded-lg 
            bg-[#1C1C1C] border border-[#A35FD9] font-PassionOne text-lg ${loadingStaking ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => !loadingStaking && StakingLocked()}>
            {loadingStaking ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : 'CONFIRM'}
          </div>
        </div>
      </div>
    </div>
  )
}