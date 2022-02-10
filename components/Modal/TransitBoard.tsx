import Image from "next/image";

interface PropsTransitBoard {
  enableBtnToFuel: boolean
  enableBtnRepair: boolean
  enableBtnRescue: boolean
}

export default function TransitBoard(props: PropsTransitBoard) {

  const transitBoard = (!props.enableBtnToFuel && !props.enableBtnRepair && !props.enableBtnRescue) ? 'go' : 'stop'

  return (
    <div className="flex justify-center items-center">
      <Image
        src={`/${transitBoard}.svg`}
        alt=""
        width={60}
        height={60}
      />
    </div>
  )
}