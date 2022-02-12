import Image from "next/image";
import { useEffect, useState } from "react";
import Notify from "./Notify";
import ReactLoading from "react-loading";

interface CardRoadProps {
  contract: any
  idTruck: number
  checkBalance: () => void
  address: string
}

export default function CardRoad(props: CardRoadProps) {

  const [name, setName] = useState("")
  const [uniqueId, setUniqueId] = useState(0)
  const [level, setLevel] = useState(0)
  const [fuelTime, setFuelTime] = useState(0)
  const [repairTime, setRepairTime] = useState(0)
  const [withdrawTime, setWithdrawTime] = useState(0)

  const [loadingUpgrade, setLoadingUpgrade] = useState(false)
  const [loadingWithdraw, setLoadingWithdraw] = useState(false)
  const [renderAgain, setRenderAgain] = useState(0)

  const [loadingPage, setLoadingPage] = useState(true)

  let imgTruck = '/game-img/silver-truck.svg'
  if (name == 'Silver') {
    imgTruck = `/game-img/silver-truck.svg`
  } else
    if (name == 'Gold') {
      imgTruck = `/game-img/gold-truck.svg`
    } else
      if (name == 'Ruby') {
        imgTruck = `/game-img/ruby-truck.svg`
      }

  useEffect(() => {
    if (props.contract) {
      props.contract.methods.trucks(props.idTruck).call().then((result: any) => {
        setName(result.name)
        setUniqueId(result.uniqueId)
        setLevel(result.level)
        setFuelTime(parseInt(result.fuelTime + '000'))
        setRepairTime(parseInt(result.repairTime + '000'))
        setWithdrawTime(parseInt(result.harvestTime + '000'))

        setLoadingWithdraw(false)
        setLoadingPage(false)
      }).catch((err: string) => console.log(err))
    }
  }, [renderAgain])

  const notify = Notify()

  function upgrade(idTruck: number) {
    if (props.contract) {
      setLoadingUpgrade(true)
      props.contract.methods.truckUpgrade(idTruck).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.TruckUpgradeEvent.returnValues.message, 'success')
        props.checkBalance()
        setLoadingUpgrade(false)
        setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoadingUpgrade(false)
      })
    }
  }

  function withdraw(idTruck: number) {
    if (props.contract) {
      setLoadingWithdraw(true)
      props.contract.methods.harvest(idTruck).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.HavestEvent.returnValues.message, 'success')
        setLoadingWithdraw(false)
        props.checkBalance()
        setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoadingWithdraw(false)
      })
    }
  }

  let withdrawValue = 0
  if (name == 'Silver') {
    withdrawValue = 75 * level
  } else
    if (name == 'Gold') {
      withdrawValue = 105 * level
    } else
      if (name == 'Ruby') {
        withdrawValue = 155 * level
      }

  const countTimeToFuel = () => {
    let maxTimeFuel = 0
    if (name === 'Silver') {
      maxTimeFuel = 9
    } else
      if (name === 'Gold') {
        maxTimeFuel = 7
      } else
        if (name === 'Ruby') {
          maxTimeFuel = 5
        }
    let timeFuel = fuelTime > Date.now() ? Math.floor((((fuelTime - Date.now()) / 1000) / 60)) : 0
    if (timeFuel > 0) {
      return (Math.floor((timeFuel / maxTimeFuel) * 100))
    } else {
      return 0
    }
  }

  const countTimeRepair = () => {
    let maxTimeRepair = 0
    if (name === 'Silver') {
      maxTimeRepair = 150
    } else
      if (name === 'Gold') {
        maxTimeRepair = 144
      } else
        if (name === 'Ruby') {
          maxTimeRepair = 114
        }
    let timeRepair = repairTime > Date.now() ? Math.floor((((repairTime - Date.now()) / 1000) / 60)) : 0
    if (timeRepair > 0) {
      return (Math.floor((timeRepair / maxTimeRepair) * 100))
    } else {
      return 0
    }
  }

  const countTimeWithdraw = () => {
    let maxTimeWithdraw = 0
    if (name === 'Silver') {
      maxTimeWithdraw = 9
    } else
      if (name === 'Gold') {
        maxTimeWithdraw = 7
      } else
        if (name === 'Ruby') {
          maxTimeWithdraw = 5
        }
    let timeWithdraw = withdrawTime > Date.now() ? Math.floor((((withdrawTime - Date.now()) / 1000) / 60)) : 0
    if (timeWithdraw > 0) {
      return (Math.floor((timeWithdraw / maxTimeWithdraw) * 100))
    } else {
      return 0
    }
  }

  const enableBtnToFuel = fuelTime > 0 ? new Date(Date.now()) > new Date(fuelTime) : false
  const enableBtnRepair = repairTime > 0 ? new Date(Date.now()) > new Date(repairTime) : false
  const enableBtnWithdraw = withdrawTime > 0 ? new Date(Date.now()) > new Date(withdrawTime) : false

  return (
    (loadingPage) ?
    <ReactLoading type="spinningBubbles" width={25} className="-mb-9" />
    :
    (!enableBtnToFuel && !enableBtnRepair) ?
      <>
        <div className="flex flex-col">
          <div className="flex flex-col items-center gap-2 p-2 w-[168px] bg-[#272727] bg-opacity-70">
            <div className="flex justify-center items-center text-base font-PassionOne">
              {loadingUpgrade ?
                <div className="">
                  <ReactLoading type="bubbles" width={25} className="-mb-9" />
                </div>
                : name[0] + '-' + uniqueId + '-' + 'L' + level
              }
              <div className={`cursor-pointer animate-pulse z-40 ml-2 mt-1 ${(loadingUpgrade || level >= 10) && 'hidden'} ${enableBtnRepair && 'opacity-30 cursor-not-allowed animate-none'}`} onClick={() => !enableBtnRepair && upgrade(props.idTruck)}>
                <Image
                  src="/game-img/upgrade.svg"
                  alt="upgrade"
                  width={15}
                  height={15}
                />
              </div>
            </div>
            <div className="flex justify-center items-center rounded-full w-[115px] h-[115px] z-20 bg-[#1C1C1C] bg-opacity-70">
              {loadingUpgrade ?
                <div className="">
                  <ReactLoading type="spinningBubbles" width={25} className="-mb-9" />
                </div>
                :
                <Image
                  src={imgTruck}
                  alt="icon-dashboard"
                  width={95}
                  height={95}
                />
              }
            </div>
            <div className="flex gap-1">
              <div className="flex items-center gap-0.5">
                <div>
                  <Image
                    src={`/game-img/fuel-icon.svg`}
                    alt="time-icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="rounded-lg w-[65px] h-3 bg-[#1C1C1C] bg-opacity-70">
                  <div className={`relative rounded-lg h-3 bg-[#F4ED47]`} style={{ width: `${countTimeToFuel()}%` }}></div>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <div>
                  <Image
                    src={`/game-img/repair-icon.svg`}
                    alt="time-icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="rounded-lg w-[65px] h-3 bg-[#1C1C1C] bg-opacity-70">
                  <div className={`relative rounded-lg h-3 bg-[#A35FD9]`} style={{ width: `${countTimeRepair()}%` }}></div>
                </div>
              </div>
            </div>
            <div className={`flex items-center justify-center h-8 w-28 rounded-lg mb-3
            bg-[#1C1C1C] border border-[#6650EF] font-PassionOne text-lg cursor-pointer ${(enableBtnRepair || enableBtnToFuel || !enableBtnWithdraw) && 'opacity-30 cursor-not-allowed'}`}
              onClick={() => (enableBtnWithdraw && !loadingWithdraw && !enableBtnToFuel && !enableBtnRepair) && withdraw(props.idTruck)}>
              {loadingWithdraw ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> :
                (!enableBtnRepair && !enableBtnToFuel && enableBtnWithdraw) ?
                  <div className="flex items-center gap-1">
                    <Image
                      src={`/game-img/balance-diamond.svg`}
                      alt="icon-dashboard"
                      width={12}
                      height={12}
                    />
                    <span className="text-sm">{withdrawValue}</span>
                  </div>
                  : 'Withdraw'}
            </div>
          </div>
          <div className={`flex w-[168px] h-1 bg-[#494966] ${enableBtnWithdraw && 'hidden'}`}>
            <div className="h-1 bg-[#6650EF]" style={{ width: `${100 - countTimeWithdraw()}%` }}></div>
            <div className={`-mt-6 ${(100 - countTimeWithdraw()) >= 5 && '-ml-1.5'}`}>
              <Image
                src={`/game-img/location_on.svg`}
                alt="icon-dashboard"
                width={12}
                height={12}
              />
            </div>
          </div>
        </div>
      </>
      :
      <></>
  )
}