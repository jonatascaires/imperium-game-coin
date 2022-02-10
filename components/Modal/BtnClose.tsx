import Image from "next/image";
import { useState } from "react";

interface PropsBtnClose {
  click: () => void
}

export default function BtnClose(props: PropsBtnClose) {

  const [state, setState] = useState("default")

  return (
    <Image
        src={`/close-${state}.svg`}
        alt="card"
        width={145}
        height={50}
        className="cursor-pointer"
        onMouseEnter={() => setState("hover")}
        onMouseLeave={() => setState("default")}
        onClick={props.click}
      />
  )
}