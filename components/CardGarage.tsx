import Image from "next/image";
import { useEffect, useState } from "react";
import Notify from "./Notify";
import ReactLoading from "react-loading";

interface CardGarageProps {
  idTruck: number
  contract: any
  address: string
  checkBalance: () => void
  language?: string
}

export default function CardGarage(props: CardGarageProps) {

  //time testnet = 60
  //time mainnet = 86400

  const [name, setName] = useState("")
  const [uniqueId, setUniqueId] = useState(0)
  const [level, setLevel] = useState(0)
  const [fuelTime, setFuelTime] = useState(0)
  const [repairTime, setRepairTime] = useState(0)
  const [value, setValue] = useState(0)

  const [loadingUpgrade, setLoadingUpgrade] = useState(false)
  const [loadingFuel, setLoadingFuel] = useState(false)
  const [loadingRepair, setLoadingRepair] = useState(false)
  const [renderAgain, setRenderAgain] = useState(0)

  const [loadingPage, setLoadingPage] = useState(true)

  let imgTruck = '/game-img/silver-truck.svg'
  if (name == 'Common') {
    imgTruck = `/game-img/silver-truck.svg`
  } else
    if (name == 'Rare') {
      imgTruck = `/game-img/gold-truck.svg`
    } else
      if (name == 'Epic') {
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
        setValue(result.value)

        setLoadingUpgrade(false)
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
        setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoadingUpgrade(false)
      })
    }
  }

  function toFuel(idTruck: number) {
    if (props.contract) {
      setLoadingFuel(true)
      props.contract.methods.reFuel(idTruck).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.ReFuelEvent.returnValues.message, 'success')
        setLoadingFuel(false)
        props.checkBalance()
        setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoadingFuel(false)
      })
    }
  }

  function repair(idTruck: number) {
    if (props.contract) {
      setLoadingRepair(true)
      props.contract.methods.repair(idTruck).send({ from: props.address }).then((resp: any) => {
        notify(resp.events.RepairEvent.returnValues.message, 'success')
        setLoadingRepair(false)
        props.checkBalance()
        setRenderAgain(Math.random())
      }).catch((err: any) => {
        notify(err.message, 'error')
        setLoadingRepair(false)
      })
    }
  }

  const countTimeToFuel = () => {
    let maxTimeFuel = 0
    if (name === 'Common') {
      maxTimeFuel = 9
    } else
      if (name === 'Rare') {
        maxTimeFuel = 7
      } else
        if (name === 'Epic') {
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
    if (name === 'Common') {
      maxTimeRepair = 150
    } else
      if (name === 'Rare') {
        maxTimeRepair = 144
      } else
        if (name === 'Epic') {
          maxTimeRepair = 114
        }
    let timeRepair = repairTime > Date.now() ? Math.floor((((repairTime - Date.now()) / 1000) / 60)) : 0
    if (timeRepair > 0) {
      return (Math.floor((timeRepair / maxTimeRepair) * 100))
    } else {
      return 0
    }
  }


  const enableBtnToFuel = fuelTime > 0 ? new Date(Date.now()) > new Date(fuelTime) : false
  const enableBtnRepair = repairTime > 0 ? new Date(Date.now()) > new Date(repairTime) : false

  return (
    (loadingPage) ?
    <ReactLoading type="spinningBubbles" width={25} className="-mb-9" />
    :
    (enableBtnToFuel || enableBtnRepair) ?
      <>
        <div className="bg-[#272727] bg-opacity-70 rounded-2xl w-[340px] h-[128px]
      flex justify-between items-center px-2 gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <Image
                  src={`/game-img/fuel-icon.svg`}
                  alt="time-icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="rounded-lg w-[100px] h-5 bg-[#1C1C1C] bg-opacity-70">
                <div className={`relative rounded-lg h-5 bg-[#F4ED47]`} style={{ width: `${countTimeToFuel()}%` }}></div>
              </div>
              <div className={`flex items-center justify-center h-7 w-16 rounded-lg 
            bg-[#1C1C1C] border border-[#F4ED47] font-PassionOne text-lg cursor-pointer animate-pulse ${(!enableBtnToFuel || enableBtnRepair) && 'opacity-30 cursor-not-allowed animate-none'}`}
                onClick={() => (enableBtnToFuel && !enableBtnRepair && !loadingFuel) && toFuel(props.idTruck)}>
                {loadingFuel ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> :
                  (enableBtnToFuel && !enableBtnRepair) ?
                    <div className="flex items-center gap-1">
                      <Image
                        src={`/game-img/balance-diamond.svg`}
                        alt="icon-dashboard"
                        width={12}
                        height={12}
                      />
                      <span className="text-sm">{50 * level}</span>
                    </div>
                    : props.language === 'en' ? 'Refuel' : 'Reabastecer'}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <Image
                  src={`/game-img/repair-icon.svg`}
                  alt="time-icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="rounded-lg w-[100px] h-5 bg-[#1C1C1C] bg-opacity-70">
                <div className={`relative rounded-lg h-5 bg-[#A35FD9]`} style={{ width: `${countTimeRepair()}%` }}></div>
              </div>
              <div className={`flex items-center justify-center h-7 w-16 rounded-lg 
            bg-[#1C1C1C] border border-[#A35FD9] font-PassionOne text-lg cursor-pointer animate-pulse ${!enableBtnRepair && 'opacity-30 cursor-not-allowed animate-none'}`}
                onClick={() => (enableBtnRepair && !loadingRepair) && repair(props.idTruck)}>
                {loadingRepair ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> :
                  enableBtnRepair ?
                    <div className="flex items-center gap-1">
                      <Image
                        src={`/game-img/balance-diamond.svg`}
                        alt="icon-dashboard"
                        width={12}
                        height={12}
                      />
                      <span className="text-sm">{value * 0.75}</span>
                    </div>
                    : props.language === 'en' ? 'Repair' : 'Reparo'}
              </div>
            </div>
            <div className="flex justify-center items-center text-base font-PassionOne">
              {loadingUpgrade ?
                <div className="">
                  <ReactLoading type="bubbles" width={25} className="-mb-9" />
                </div>
                : name[0] + '-' + uniqueId + '-' + 'L' + level
              }
              <div className={`cursor-pointer z-20 ml-2 mt-1 ${(loadingUpgrade || level >= 10) && 'hidden'} ${enableBtnRepair && 'opacity-30 cursor-not-allowed'}`} onClick={() => !enableBtnRepair && upgrade(props.idTruck)}>
                <Image
                  src="/game-img/upgrade.svg"
                  alt="upgrade"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center rounded-2xl bg-[#1C1C1C] bg-opacity-70 w-[112px] h-[112px]">
            {loadingUpgrade ?
              <div className="">
                <ReactLoading type="spinningBubbles" width={25} className="-mb-9" />
              </div>
              :
              <Image
                src={imgTruck}
                alt="icon-dashboard"
                width={100}
                height={100}
              />
            }
          </div>
        </div>
      </>
      :
      <></>
  )
}