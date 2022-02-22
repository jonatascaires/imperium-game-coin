import Image from "next/image";
import Notify from "../Notify";

interface PresaleProps {
  setActivePage: (v: number) => void
}

export default function Presale(props: PresaleProps) {

  const notify = Notify()

  const officialAddress = '0xdA8e0fDd998c51D9b59aE543D713b7Ec33C28f77'

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
        <span className="text-4xl font-PassionOne">Presale</span>
      </div>
      <div className="mt-3 text-justify flex flex-col gap-4 font-PassionOne p-3">
        <div>
          IGC token pre-sales are open.
          A total of 1,000,000 tokens were earmarked for sales at a fixed price of <span className="text-yellow-400">0.10 BUSD</span>.
        </div>
        <div>
          We currently have available:
        </div>
        <div className="text-4xl text-center text-yellow-400">
          995,000 IGC
        </div>
        <div>
          100% of the amount raised from the pre-sale of the tokens will be used to provide more liquidity on the IGC listing on PancakeSwap.
        </div>
        <div>
          All BUSD amounts sent to this official address:
        </div>
        <div className="text-xl text-center text-yellow-400 cursor-pointer"
          onClick={() => { navigator.clipboard.writeText(officialAddress), notify('Official address for the purchase of the copied IGC.', 'success') }}>
          {officialAddress}
        </div>
        <div>
          You will receive the IGC back at the same Metamask address you sent the BUSD from.
        </div>
      </div>
    </div>
  )
}