import Image from "next/image";
import ReactLoading from "react-loading";

interface ButtonProps {
  children: any
  action?: () => void
  className?: string
  loading?: boolean
}

export default function NavButton(props: ButtonProps) {
  return (
    <div className="relative">
      <div className={`flex justify-center items-center 
              text-xl w-44 h-10 rounded-xl font-PassionOne  cursor-pointer 
              bg-[#272727] border-2 border-[#81E8E8] 
              ${props.className}`}
        onClick={!props.loading ? props.action : () => ''}>
        <div className="flex gap-3">
          {props.loading ?
            <div className="flex justify-center items-center gap-3 text-[#646464] cursor-not-allowed">
              <ReactLoading type="spinningBubbles" width={25} className="-mb-9" />
              <span>Processing... </span>
            </div>
            :
            <>
              <Image
                src={`/game-img/buy-icon.svg`}
                alt="icon-dashboard"
                width={20}
                height={20}
              />
              <span>
                {props.children}
              </span>
            </>
          }
        </div>
      </div>
    </div>
  )
}