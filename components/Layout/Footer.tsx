import Image from "next/image";

interface FooterProps {
  setActivePage: (v: number) => void
}

export default function Footer(props: FooterProps) {
  return (
    <div className="flex justify-center gap-20 p-3">
      <div className="flex flex-col gap-2 text-base cursor-pointer" onClick={() => props.setActivePage(4)}>
        <Image
          src={`/game-img/menu-affiliates.svg`}
          alt="icon-dashboard"
          width={25}
          height={25}
        />
        <span className="text-lg font-PassionOne">Affiliates</span>
      </div>
      <div className="flex flex-col gap-2 text-base cursor-pointer" onClick={() => props.setActivePage(5)}>
        <Image
          src={`/game-img/menu-staking.svg`}
          alt="icon-dashboard"
          width={25}
          height={25}
        />
        <span className="text-lg font-PassionOne">Staking</span>
      </div>
    </div>
  )
}