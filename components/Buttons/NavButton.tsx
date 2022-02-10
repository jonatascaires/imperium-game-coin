import Image from "next/image";

interface ButtonProps {
  name: string
  className?: string
  fontSize?: string
  inative?: boolean
  alert?: boolean
  action?: () => void
}

export default function NavButton(props: ButtonProps) {

  const fontSize = props.fontSize
    ? `${props.fontSize} w-28 h-12 rounded-xl font-PassionOne`
    : 'text-6xl w-60 h-24 rounded-3xl font-OdibeeSans'

  return (
    <div className="relative">
      <div className={`flex justify-center items-center 
              ${fontSize}  cursor-pointer 
              ${!props.inative && 'bg-[#272727] bg-opacity-30 border-2 border-[#81E8E8]'} 
              ${props.className}`}
        onClick={props.action}>
        {props.name}
      </div>
      <div className={`absolute 
            ${!props.inative ? '-top-3 -right-2' : '-top-2 right-1'} 
            ${!props.alert && 'hidden'}`}>
        <Image
          src={`/game-img/alert.svg`}
          alt="icon-dashboard"
          width={26}
          height={26}
        />
      </div>
    </div>
  )
}