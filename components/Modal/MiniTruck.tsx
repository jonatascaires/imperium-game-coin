import Image from "next/image";

interface PropsMiniTruck {
  name: string
}

export default function MiniTruck(props: PropsMiniTruck) {
  return (
    <div className="flex justify-center">
      <Image
        src={`/${props.name}truck2-mini.png`}
        alt=""
        width={85}
        height={75}
      />
    </div>
  )
}