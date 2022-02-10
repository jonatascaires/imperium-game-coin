import Image from "next/image";
import IconMenu from "./icons/IconMenu";

interface MenuProps {
  optionSelected: (v: number) => void
}

export default function Menu(props: MenuProps) {
  return (
    <div className="flex items-center justify-center max-h-[159px] md:bg-[#0C1526] md:border-t-[3px] md:border-[#0C3358]">
      <Image
        src="/menu-template.svg"
        alt=""
        width={1200}
        height={210}
        className="-mt-[21px]"
      />
      <div className="absolute flex justify-center">
        <div className="absolute text-center w-52 sm:text-[32px] text-[#40E9F1] cursor-pointer -mt-6 sm:-mt-9">
          <button onClick={() => props.optionSelected(1)}>PLAY</button>
        </div>
        <div className="flex space-x-3 sm:space-x-16 -mt-5">
          <div><IconMenu icon="dashboard" action={() => props.optionSelected(2)} /></div>
          <div><IconMenu icon="affiliates" action={() => props.optionSelected(3)} /></div>
          <div className="w-60"></div>
          <div><IconMenu icon="staking" action={() => props.optionSelected(4)} /></div>
          <div><IconMenu icon="settings" action={() => props.optionSelected(5)} /></div>
        </div>
      </div>
    </div>
  )
}