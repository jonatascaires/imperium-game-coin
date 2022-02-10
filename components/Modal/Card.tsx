import Image from 'next/image'
import Button from '../Buttons/NavButton'
import ReactLoading from "react-loading";

interface PropsCard {
  name: string
  value: number
  onClick: (v: number) => void
  loading: boolean
}

export default function Card(props: PropsCard) {
  return (
    <div>
      <Image
        src={`/card-${props.name}.svg`}
        alt="card"
        width={256}
        height={440}
        className="sm:w-64 hidden sm:block"
      />
      <div className="flex justify-end sm:justify-center -mt-[16px] sm:-mt-[48px]">
        {props.loading ?
          <ReactLoading type="cylon" color="#3EE2EB" className="-mt-6 z-20" /> :
          <Button name={`${props.value}`} onClick={() => props.onClick(props.value)} className="-mt-5" />
        }
      </div>
    </div>
  )
}