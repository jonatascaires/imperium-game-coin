import Image from "next/image";
import { useState } from "react";

interface WhitepaperProps {
  setActivePage: (v: number) => void
  selectOption: string
}

export default function Whitepaper(props: WhitepaperProps) {

  const options = ['Introduction 1/3', 'Introduction 2/3', 'Introduction 3/3', 'Token IGC', 'Savings', 'The game 1/2', 'The game 2/2', 'Earnings simulation 1/12', 'Earnings simulation 2/12', 'Earnings simulation 3/12', 'Earnings simulation 4/12', 'Earnings simulation 5/12', 'Earnings simulation 6/12', 'Earnings simulation 7/12', 'Earnings simulation 8/12', 'Earnings simulation 9/12', 'Earnings simulation 10/12', 'Earnings simulation 11/12', 'Earnings simulation 12/12', 'Truck upgrade', 'Truck maintenance 1/2', 'Truck maintenance 2/2', 'Rewards', 'Affiliate program', 'Developer']
  const [selectedOption, setSelectedOption] = useState(props.selectOption)

  function renderText(v: string) {
    if (v == 'Introduction 1/3') {
      return (
        <Image
          src={`/game-img/whitepaper/br/Slide1.svg`}
          alt="icon-dashboard"
          width={1000}
          height={720}
        />
      )
    } else
      if (v == 'Introduction 2/3') {
        return (
          <Image
            src={`/game-img/whitepaper/br/Slide2.svg`}
            alt="icon-dashboard"
            width={1000}
            height={720}
          />
        )
      } else
        if (v == 'Introduction 3/3') {
          return (
            <Image
              src={`/game-img/whitepaper/br/Slide3.svg`}
              alt="icon-dashboard"
              width={1000}
              height={720}
            />
          )
        } else
          if (v == 'Token IGC') {
            return (
              <Image
                src={`/game-img/whitepaper/br/Slide4.svg`}
                alt="icon-dashboard"
                width={1000}
                height={720}
              />
            )
          } else
            if (v == 'Savings') {
              return (
                <Image
                  src={`/game-img/whitepaper/br/Slide5.svg`}
                  alt="icon-dashboard"
                  width={1000}
                  height={720}
                />
              )
            } else
              if (v == 'The game 1/2') {
                return (
                  <Image
                    src={`/game-img/whitepaper/br/Slide6.svg`}
                    alt="icon-dashboard"
                    width={1000}
                    height={720}
                  />
                )
              } else
                if (v == 'The game 2/2') {
                  return (
                    <Image
                      src={`/game-img/whitepaper/br/Slide7.svg`}
                      alt="icon-dashboard"
                      width={1000}
                      height={720}
                    />
                  )
                } else
                  if (v == 'Earnings simulation 1/12') {
                    return (
                      <Image
                        src={`/game-img/whitepaper/br/Slide8.svg`}
                        alt="icon-dashboard"
                        width={1000}
                        height={720}
                      />
                    )
                  } else
                    if (v == 'Earnings simulation 2/12') {
                      return (
                        <Image
                          src={`/game-img/whitepaper/br/Slide9.svg`}
                          alt="icon-dashboard"
                          width={1000}
                          height={720}
                        />
                      )
                    } else
                      if (v == 'Earnings simulation 3/12') {
                        return (
                          <Image
                            src={`/game-img/whitepaper/br/Slide10.svg`}
                            alt="icon-dashboard"
                            width={1000}
                            height={720}
                          />
                        )
                      } else
                        if (v == 'Earnings simulation 4/12') {
                          return (
                            <Image
                              src={`/game-img/whitepaper/br/Slide11.svg`}
                              alt="icon-dashboard"
                              width={1000}
                              height={720}
                            />
                          )
                        } else
                          if (v == 'Earnings simulation 5/12') {
                            return (
                              <Image
                                src={`/game-img/whitepaper/br/Slide12.svg`}
                                alt="icon-dashboard"
                                width={1000}
                                height={720}
                              />
                            )
                          } else
                            if (v == 'Earnings simulation 6/12') {
                              return (
                                <Image
                                  src={`/game-img/whitepaper/br/Slide13.svg`}
                                  alt="icon-dashboard"
                                  width={1000}
                                  height={720}
                                />
                              )
                            } else
                              if (v == 'Earnings simulation 7/12') {
                                return (
                                  <Image
                                    src={`/game-img/whitepaper/br/Slide14.svg`}
                                    alt="icon-dashboard"
                                    width={1000}
                                    height={720}
                                  />
                                )
                              } else
                                if (v == 'Earnings simulation 8/12') {
                                  return (
                                    <Image
                                      src={`/game-img/whitepaper/br/Slide15.svg`}
                                      alt="icon-dashboard"
                                      width={1000}
                                      height={720}
                                    />
                                  )
                                } else
                                  if (v == 'Earnings simulation 9/12') {
                                    return (
                                      <Image
                                        src={`/game-img/whitepaper/br/Slide16.svg`}
                                        alt="icon-dashboard"
                                        width={1000}
                                        height={720}
                                      />
                                    )
                                  } else
                                    if (v == 'Earnings simulation 10/12') {
                                      return (
                                        <Image
                                          src={`/game-img/whitepaper/br/Slide17.svg`}
                                          alt="icon-dashboard"
                                          width={1000}
                                          height={720}
                                        />
                                      )
                                    } else
                                      if (v == 'Earnings simulation 11/12') {
                                        return (
                                          <Image
                                            src={`/game-img/whitepaper/br/Slide18.svg`}
                                            alt="icon-dashboard"
                                            width={1000}
                                            height={720}
                                          />
                                        )
                                      } else
                                        if (v == 'Earnings simulation 12/12') {
                                          return (
                                            <Image
                                              src={`/game-img/whitepaper/br/Slide19.svg`}
                                              alt="icon-dashboard"
                                              width={1000}
                                              height={720}
                                            />
                                          )
                                        } else
                                          if (v == 'Truck upgrade') {
                                            return (
                                              <Image
                                                src={`/game-img/whitepaper/br/Slide20.svg`}
                                                alt="icon-dashboard"
                                                width={1000}
                                                height={720}
                                              />
                                            )
                                          } else
                                            if (v == 'Truck maintenance 1/2') {
                                              return (
                                                <Image
                                                  src={`/game-img/whitepaper/br/Slide21.svg`}
                                                  alt="icon-dashboard"
                                                  width={1000}
                                                  height={720}
                                                />
                                              )
                                            } else
                                              if (v == 'Truck maintenance 2/2') {
                                                return (
                                                  <Image
                                                    src={`/game-img/whitepaper/br/Slide22.svg`}
                                                    alt="icon-dashboard"
                                                    width={1000}
                                                    height={720}
                                                  />
                                                )
                                              } else
                                                if (v == 'Rewards') {
                                                  return (
                                                    <Image
                                                      src={`/game-img/whitepaper/br/Slide23.svg`}
                                                      alt="icon-dashboard"
                                                      width={1000}
                                                      height={720}
                                                    />
                                                  )
                                                } else
                                                  if (v == 'Affiliate program') {
                                                    return (
                                                      <Image
                                                        src={`/game-img/whitepaper/br/Slide24.svg`}
                                                        alt="icon-dashboard"
                                                        width={1000}
                                                        height={720}
                                                      />
                                                    )
                                                  } else
                                                    if (v == 'Developer') {
                                                      return (
                                                        <Image
                                                          src={`/game-img/whitepaper/br/Slide25.svg`}
                                                          alt="icon-dashboard"
                                                          width={1000}
                                                          height={720}
                                                        />
                                                      )
                                                    }
  }

  return (
    <div className="text-left px-3">
      <div className="flex items-center gap-3">
        <div onClick={() => props.setActivePage(0)}>
          <Image
            src={`/game-img/close.svg`}
            alt="icon-dashboard"
            width={14}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <span className="text-4xl font-PassionOne">Whitepaper</span>
      </div>
      <div className="mt-3 text-justify flex flex-col gap-4">
        <select className="text-xl text-blue-200 bg-transparent cursor-pointer"
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}>
          {options.map((opt, key) => <option className="bg-zinc-800 text-base" key={key} value={opt}>{opt}</option>)}
        </select>
        <div className="flex flex-col gap-4 overflow-y-auto h-[525px] p-3 text-base">
          {renderText(selectedOption)}
        </div>
        <div className="flex justify-between font-PassionOne -mt-3 px-2">
          <div className="flex flex-col text-left cursor-pointer" onClick={() => setSelectedOption(selectedOption == 'Introduction 1/3' ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1])}>
            <span className="text-base text-gray-500">Previous</span>
            <span className="text-xl -mt-2">{selectedOption == 'Introduction 1/3' ? options[options.length - 1] : options[options.indexOf(selectedOption) - 1]}</span>
          </div>
          <div className="flex flex-col text-right cursor-pointer" onClick={() => setSelectedOption(selectedOption == 'Developer' ? options[0] : options[options.indexOf(selectedOption) + 1])}>
            <span className="text-base text-gray-500">Next</span>
            <span className="text-xl -mt-2">{selectedOption == 'Developer' ? options[0] : options[options.indexOf(selectedOption) + 1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}