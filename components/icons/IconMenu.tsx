import Image from "next/image"
import { useState } from "react"

interface PropsIcon {
  action?: () => void
  icon: string
  active?: boolean
}

export default function IconMenu(props: PropsIcon) {

  const [status, setStatus] = useState('default')

  return (
    <div className="hover:text-[#DAE9FF] cursor-pointer" onClick={props.action}>
      <Image
        src={`/icon-${props.icon}-${props.active ? 'hover' : status}.svg`}
        alt="icon-dashboard"
        width={60}
        height={60}
        onMouseEnter={() => setStatus('hover')}
        onMouseLeave={() => setStatus('default')}
        className={`w-9 sm:w-[68px]`}
      />
      <div className="capitalize text-[10px] sm:text-base">{props.icon}</div>
    </div>
  )
}