import Image from 'next/image'
import ReactLoading from "react-loading";

interface PropsBtnGarage {
  btnName?: string
  enable?: boolean
  className?: string
  click?: (v: number) => void
  idTruck?: number
  loading: boolean
}

export default function BtnGarage(props: PropsBtnGarage) {

  const enable = props.enable ? 'enable' : 'disable'

  return (
    <>
      {props.loading ?
        <div className="flex justify-center">
          <ReactLoading type="cylon" color="#3EE2EB" className="relative -mt-4 z-20" />
        </div>
        :
        <div className={`flex justify-center ${props.className}`}
          onClick={props.btnName && props.enable ? () => props.click(props.idTruck) : null}>
          <Image
            src={`/${props.btnName}-${enable}.svg`}
            alt="btnGarage"
            width={100}
            height={40}
            className={props.enable ? 'cursor-pointer' : 'cursor-not-allowed'}
          />
        </div>
      }
    </>
  )
}