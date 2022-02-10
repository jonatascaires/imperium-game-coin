import Image from "next/image"
import { useState } from "react"

interface PropsBtnModal {
  action?: () => void
  name: string
  active?: boolean
}

export default function BtnModal(props: PropsBtnModal) {

  const [status, setStatus] = useState('default')

  return (
    <div className="hover:text-[#DAE9FF] cursor-pointer ml-5" onClick={props.action}>
      <Image
        src={`/btn-${props.name}-${props.active ? 'hover' : status}.svg`}
        alt={`btn-${props.name}`}
        width={100}
        height={40}
        onMouseEnter={() => setStatus('hover')}
        onMouseLeave={() => setStatus('default')}
        className="w-16 sm:w-auto"
      />
    </div>
  )
}