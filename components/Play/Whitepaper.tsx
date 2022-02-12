import Image from "next/image";

interface WhitepaperProps {
  setActivePage: (v: number) => void
}

export default function Whitepaper(props: WhitepaperProps) {
  return (
    <div className="text-left px-3">
      <div className="flex items-center gap-3">
        <div onClick={() => props.setActivePage(0)}>
          <Image
            src={`/game-img/back.svg`}
            alt="icon-dashboard"
            width={14}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <span className="text-4xl font-PassionOne">Whitepaper</span>
      </div>
      <div className="mt-3 text-justify flex flex-col gap-4">
        <select className="text-xl text-blue-200 bg-transparent cursor-pointer">
          <option className="bg-zinc-800">Introduction</option>
          <option className="bg-zinc-800">Introduction</option>
        </select>
        <div className="flex flex-col gap-4 overflow-y-auto h-[525px] p-2">
          <span className="text-base">As well known, NFT games are making a huge success on the internet lately.</span>
          <span className="text-base">They are games made on the blockchain in an innovative virtual game model commonly called “play-to-earn” (play to win).</span>
          <span className="text-base">A blockchain is used to create a real economy within a virtual world and NFT is what makes a digital item unique to the world — with proven authenticity through information recorded on the blockchain.</span>
          <span className="text-base"><span className="text-yellow-400">Imperium Truck </span>is an NFT game on Blockchain for players who are lovers about truck.</span>
          <span className="text-base">The player will be rewarded with <span className="text-yellow-400">Tokens IGC </span> for managing their fleet of trucks...</span>
          <span className="text-base">Buy new trucks, refill with fuel, make necessary repairs and redeem your reward tokens upon successfully completing deliveries.</span>
        </div>
      </div>
    </div>
  )
}