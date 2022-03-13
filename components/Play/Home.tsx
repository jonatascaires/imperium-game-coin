import Image from "next/image"
import NavButton from "../Buttons/NavButton"

interface HomeProps {
  connect?: () => void
  language?: string
}

export default function Home(props: HomeProps) {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-4 -mt-14 animate__animated animate__fadeIn">
      <Image
          src={`/logo5.png`}
          alt="logo"
          width={380}
          height={280}
        />
      <div className="flex justify-center mt-12 animate-pulse">
        <NavButton name={`${props.language === 'en' ? 'PLAY' : 'JOGAR'}`} action={() => props.connect()} />
      </div>
    </div>
  )
}