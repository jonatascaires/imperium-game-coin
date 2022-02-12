import NavButton from "../Buttons/NavButton"

interface HomeProps {
  connect?: () => void
}

export default function Home(props: HomeProps) {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-4 -mt-14 animate__animated animate__fadeIn">
      <span className="text-center text-6xl">Imperium</span>
      <span className="text-center text-8xl">Truck</span>
      <div className="flex justify-center mt-12">
        <NavButton name="PLAY" action={() => props.connect()} />
      </div>
    </div>
  )
}