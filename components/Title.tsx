import Image from "next/image";

export default function Title() {
  return (
    <div className="flex justify-center items-center p-16">
      <Image
        src="/title-game.svg"
        alt=""
        width={500}
        height={120}
      />
    </div>
  )
}