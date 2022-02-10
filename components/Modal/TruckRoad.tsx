import Image from "next/image";
import { useState } from "react";

interface PropsTruckRoad {
  contract: any
  idTruck: number
  address: string
  updateBalance: () => void
}

export default function TruckRoad(props: PropsTruckRoad) {

  if (props.contract) {
    props.contract.methods.trucks(props.idTruck).call().then((result: any) => {
      setName(result.name)
      setUniqueId(result.uniqueId)
      setLevel(result.level)
      setRescueTime(parseInt(result.harvestTime + '000'))
      setFuelTime(parseInt(result.fuelTime + '000'))
      setRepairTime(parseInt(result.repairTime + '000'))
    }).catch((err: string) => console.log(err))
  }

  const [name, setName] = useState('')
  const [uniqueId, setUniqueId] = useState(0)
  const [rescueTime, setRescueTime] = useState(0)
  const [level, setLevel] = useState(0)
  const [fuelTime, setFuelTime] = useState(0)
  const [repairTime, setRepairTime] = useState(0)

  const enableBtnToFuel = new Date(Date.now()) > new Date(fuelTime)
  const enableBtnRepair = new Date(Date.now()) > new Date(repairTime)
  const enableBtnRescue = new Date(Date.now()) > new Date(rescueTime)

  // const countTimeRescue = () => {
  //   let maxTime = 0
  //   let valueRescue = 0
  //   if (name === 'Silver') {
  //     maxTime = 10
  //     valueRescue = 75 * 1
  //   } else
  //     if (name === 'Gold') {
  //       maxTime = 8
  //       valueRescue = 105 * 1
  //     } else
  //       if (name === 'Ruby') {
  //         maxTime = 6
  //         valueRescue = 155 * 1
  //       }
  //   let time = rescueTime > Date.now() ? Math.floor((((rescueTime - Date.now()) / 1000) / 60)) : 0
  //   if (time > 0) {
  //     return [((valueRescue * level) / 100) * (100 - (Math.floor(((time / maxTime) * 100)))), valueRescue * level]
  //   } else {
  //     return [valueRescue * level, valueRescue * level]
  //   }
  // }



  const countTimeRescue = () => {
    let maxTime = 0
    if (name === 'Silver') {
      maxTime = 10
    } else
      if (name === 'Gold') {
        maxTime = 8
      } else
        if (name === 'Ruby') {
          maxTime = 6
        }
    let time = rescueTime > Date.now() ? Math.floor((((rescueTime - Date.now()) / 1000) / 60)) : 0
    if (time > 0) {
      return (Math.floor((time / maxTime) * 100))
    } else {
      return 0
    }
  }

  console.log('countTimeRescue ' + countTimeRescue())

  let barPercent = 'w-[0px]'
  let distanceTraveled = 'ml-[28px]'

  if ((100 - countTimeRescue()) > 95 && (100 - countTimeRescue()) <= 100) {
    barPercent = 'w-[720px]'
    distanceTraveled = 'ml-[692px]'
  }
  if ((100 - countTimeRescue()) > 90 && (100 - countTimeRescue()) <= 95) {
    barPercent = 'w-[684px]'
    distanceTraveled = 'ml-[656px]'
  }
  if ((100 - countTimeRescue()) > 85 && (100 - countTimeRescue()) <= 90) {
    barPercent = 'w-[648px]'
    distanceTraveled = 'ml-[584px]'
  }
  if ((100 - countTimeRescue()) > 80 && (100 - countTimeRescue()) <= 85) {
    barPercent = 'w-[612px]'
    distanceTraveled = 'ml-[476px]'
  }
  if ((100 - countTimeRescue()) > 75 && (100 - countTimeRescue()) <= 80) {
    barPercent = 'w-[576px]'
    distanceTraveled = 'ml-[548px]'
  }
  if ((100 - countTimeRescue()) > 70 && (100 - countTimeRescue()) <= 75) {
    barPercent = 'w-[540px]'
    distanceTraveled = 'ml-[512px]'
  }
  if ((100 - countTimeRescue()) > 65 && (100 - countTimeRescue()) <= 70) {
    barPercent = 'w-[504px]'
    distanceTraveled = 'ml-[476px]'
  }
  if ((100 - countTimeRescue()) > 60 && (100 - countTimeRescue()) <= 65) {
    barPercent = 'w-[468px]'
    distanceTraveled = 'ml-[440px]'
  }
  if ((100 - countTimeRescue()) > 55 && (100 - countTimeRescue()) <= 60) {
    barPercent = 'w-[432px]'
    distanceTraveled = 'ml-[404px]'
  }
  if ((100 - countTimeRescue()) > 50 && (100 - countTimeRescue()) <= 55) {
    barPercent = 'w-[396px]'
    distanceTraveled = 'ml-[368px]'
  }
  if ((100 - countTimeRescue()) > 45 && (100 - countTimeRescue()) <= 50) {
    barPercent = 'w-[360px]'
    distanceTraveled = 'ml-[332px]'
  }
  if ((100 - countTimeRescue()) > 40 && (100 - countTimeRescue()) <= 45) {
    barPercent = 'w-[324px]'
    distanceTraveled = 'ml-[296px]'
  }
  if ((100 - countTimeRescue()) > 35 && (100 - countTimeRescue()) <= 40) {
    barPercent = 'w-[288px]'
    distanceTraveled = 'ml-[260px]'
  }
  if ((100 - countTimeRescue()) > 30 && (100 - countTimeRescue()) <= 35) {
    barPercent = 'w-[252px]'
    distanceTraveled = 'ml-[224px]'
  }
  if ((100 - countTimeRescue()) > 25 && (100 - countTimeRescue()) <= 30) {
    barPercent = 'w-[216px]'
    distanceTraveled = 'ml-[188px]'
  }
  if ((100 - countTimeRescue()) > 20 && (100 - countTimeRescue()) <= 25) {
    barPercent = 'w-[180px]'
    distanceTraveled = 'ml-[152px]'
  }
  if ((100 - countTimeRescue()) > 15 && (100 - countTimeRescue()) <= 20) {
    barPercent = 'w-[144px]'
    distanceTraveled = 'ml-[116px]'
  }
  if ((100 - countTimeRescue()) > 10 && (100 - countTimeRescue()) <= 15) {
    barPercent = 'w-[108px]'
    distanceTraveled = 'ml-[80px]'
  }
  if ((100 - countTimeRescue()) > 5 && (100 - countTimeRescue()) <= 10) {
    barPercent = 'w-[72px]'
    distanceTraveled = 'ml-[44px]'
  }
  if ((100 - countTimeRescue()) > 0 && (100 - countTimeRescue()) <= 5) {
    barPercent = 'w-[36px]'
    distanceTraveled = 'ml-[28px]'
  }

  console.log('barPercent ' + barPercent)

  if (!enableBtnToFuel && !enableBtnRepair) {
    return (
      <div className="mb-10">
        <div className="text-center">
          <Image
            src={`/road-base.svg`}
            alt=""
            width={800}
            height={120}
          />
          <div className={`bg-gradient-to-t from-[#0B52BD] via-[#0B52BD] to-[#3173D6] ${barPercent} h-3 sticky -mt-[22px] ml-[54px] z-20  text-white text-[10px]`}>
              {name[0]}-{uniqueId}......{(100 - countTimeRescue())}%
          </div>
          <div className={`${distanceTraveled} -mt-[100px]`}>
            <Image
              src={`/${name}-truck-road.svg`}
              alt=""
              width={102}
              height={65}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return <></>
  }
}