import Image from "next/image";

export default function LogoPinksale() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image
          src={`/logo_pinksale.png`}
          alt="logo"
          width={380}
          height={280}
        />
    </div>
  )
}