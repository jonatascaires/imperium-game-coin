import Image from "next/image";
import { useState } from "react";

interface CalendarBtnProps {
  days: number 
  selected: number
  setDaysSelected: (v: number) => void
}

export default function CalendarBtn(props: CalendarBtnProps) {

  let selected = false
  if(props.selected === props.days){
    selected = true
  }

  const [hover, setHover] = useState(false)

  return (
    <div className={`relative font-PassionOne cursor-pointer ${props.days > 90 && '-mt-3'}`} 
    onClick={() => props.setDaysSelected(props.days)}>
      <Image
        src={`/game-img/calendar-${(hover || props.selected === props.days) ? 'hover' : 'default'}.svg`}
        alt="icon-dashboard"
        width={70}
        height={70}
      />
      <div className={`absolute top-4 ${props.days > 90 ? 'left-4' : 'left-5'} flex flex-col justify-center items-center`}>
        <span className={`-mb-3 text-3xl ${(hover || props.selected === props.days) ? 'text-white' : 'text-[#646464]'}`}>{props.days}</span>
        <span className={`${(hover || props.selected === props.days) ? 'text-white' : 'text-[#646464]'} text-lg`}>days</span>
      </div>
    </div>
  )
}