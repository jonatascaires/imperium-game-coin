import Image from "next/image";
import { useState } from "react";

interface PropsButton {
  pay?: boolean
  name?: string
  className?: string
  onClick?: () => void
}

export default function Button(props: PropsButton) {

  const [state, setState] = useState('default')

  return (
    <div className={`cursor-pointer ${props.className}`}
      onClick={props.onClick}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('default')}>
      <Image
        src={`/vl${props.name}-${state}.svg`}
        alt="diamont"
        width={150}
        height={53}
      />
    </div>
  )
}