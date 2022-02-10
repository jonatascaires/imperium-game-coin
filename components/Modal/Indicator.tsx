import Image from "next/image"

interface PropsIndicator {
  name: string
  count: number
  color: string
}

export default function Indicator(props: PropsIndicator) {

  const bar = []
  const count = props.count
  for (let i = 0; i < 20; i++) {
    if (i < count) {
      bar.push(props.color)
    } else {
      bar.push('empty')
    }
  }

  return (
    <div className="-mt-3">
      <div className="relative top-[35px] left-[59px] flex gap-[1.5px]">
        {bar.map((item, index) => {
          return (
            <Image
              src={`/${item}-bar.svg`}
              alt=""
              width={3}
              height={18}
              className="z-50"
              key={index}
            />
          )
        })}
      </div>
      <Image
        src={`/indicator-${props.name}.svg`}
        alt=""
        width={165}
        height={54}
      />
    </div>
  )
}