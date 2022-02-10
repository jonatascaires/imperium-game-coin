import Image from "next/image"
import { useCallback, useState } from "react"
import BtnModal from "./BtnModal"
import Garage from "./Garage"
import Modal from "./Modal"
import Road from "./Road"
import Shop from "./Shop"

interface PropsContentModalPlay {
  option: number
  setOption: (v: number) => void
  contract: any
  address: string
  code: any
}

export default function ContentModalPlay(props: PropsContentModalPlay) {

  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState(0)

  const [supply, setSupply] = useState(0)
  const [burnt, setBurnt] = useState(0)
  const [mined, setMined] = useState(0)
  const [gamePool, setGamePool] = useState(0)

  const [codeRelationship, setCodeRelationship] = useState(0)
  const [maximumBonusRelationship, setMaximumBonusRelationShip] = useState(0)

  updateBalance()

  function updateBalance() {
    if (props.contract) {
      props.contract.methods.balanceOf(props.address).call().then((balance: number) => {
        setBalance(balance)
        setLoading(false)
      }).catch((err: string) => console.log(err))

      props.contract.methods.totalSupply().call().then((totalSupply: number) => {
        setSupply(totalSupply)
      }).catch((err: string) => console.log(err))

      props.contract.methods.deadCoin().call().then((deadCoin: number) => {
        setBurnt(deadCoin)
      }).catch((err: string) => console.log(err))

      props.contract.methods.miningCoin().call().then((miningCoin: number) => {
        setMined(miningCoin)
      }).catch((err: string) => console.log(err))

      props.contract.methods.gamePool().call().then((gamePool: number) => {
        setGamePool(gamePool)
      }).catch((err: string) => console.log(err))

      props.contract.methods.maximumRelationshipBonus(props.address).call().then((result: number) => {
        setMaximumBonusRelationShip(result)
      }).catch((err: string) => console.log(err))

      props.contract.methods.getTrucksByOwner(props.address).call().then((result: string[]) => {
        props.contract.methods.trucks(result[0]).call().then((result: any) => {
          setCodeRelationship(result.uniqueId)
        }).catch((err: string) => console.log(err))
      }).catch((err: string) => console.log(err))
    }
  }

  const [optionModal, setOptionModal] = useState(1)

  const renderContentModal = useCallback(() => {
    switch (optionModal) {

      case 1:
        return <div className="h-[420px] w-[832px]"><Shop contract={props.contract} code={props.code} address={props.address} updateBalance={updateBalance} /></div>

      case 2:
        return <div className="h-[420px] w-[832px] overflow-y-auto"><Garage contract={props.contract} address={props.address} updateBalance={updateBalance} /></div>

      case 3:
        return <div className="h-[420px] w-[832px] overflow-y-auto"><Road contract={props.contract} address={props.address} updateBalance={updateBalance} /></div>

      default:
        return ' '

    }
  }, [optionModal])

  return (
    <>
      <Modal open={props.option} close={props.setOption}>
        {/* <div className="flex justify-between gap-5 font-bold text-lg -mt-3 mb-2 bg-[#000000]">
          <div>Maximum Supply: {supply === 0 ? 'loading...' : (supply >= 100000000 ? supply / 100000000 : 0) + ' IGC'}</div>
          <div> | </div>
          <div>Burnt Supply: {burnt === 0 ? 'loading...' : (burnt >= 100000000 ? burnt / 100000000 : 0) + ' IGC'}</div>
          <div> | </div>
          <div>Mined Supply: {mined === 0 ? 'loading...' : (mined >= 100000000 ? mined / 100000000 : 0) + ' IGC'}</div>
          <div> | </div>
          <div>Game Pool: {gamePool === 0 ? 'loading...' : (gamePool >= 100000000 ? gamePool / 100000000 : 0) + ' IGC'}</div>
        </div>
        <div className="font-bold text-lg mb-2">
          <div>Relationship Link: {codeRelationship ? `http://192.168.18.5:3000/${codeRelationship}` : 'Buy a truck to receive your relationship code'}</div>
          <div>Maximum Relationship Bonus Available: {(maximumBonusRelationship >= 100000000 ? (maximumBonusRelationship / 100000000) : 0) + ' IGC'}</div>
        </div> */}
        <div className="flex justify-end">
          <div className="flex justify-center items-center gap-2 sm:text-xl ml-0 sm:mt-2 mx-auto">
            <div className="-mb-2">
              <Image
                src="/diamont.svg"
                alt="diamont"
                width={30}
                height={30}
              />
            </div>
            <div className="text-2xl -mt-1 text-[#40E9F1]">
              {loading ? 'loading...' : (balance / 100000000)}
            </div>
          </div>
          <div className="relative top-2 flex -space-x-8 ">
            <div className={optionModal === 1 ? `z-40` : `z-30`}>
              <BtnModal name="shop" active={optionModal === 1} action={() => setOptionModal(1)} />
            </div>
            <div className={optionModal === 2 ? `z-40` : `z-20`}>
              <BtnModal name="garage" active={optionModal === 2} action={() => setOptionModal(2)} />
            </div>
            <div className={optionModal === 3 ? `z-40` : `z-10`}>
              <BtnModal name="road" active={optionModal === 3} action={() => setOptionModal(3)} />
            </div>
          </div>
        </div>
        <hr className="border border-[#113C57] mb-4" />
        {renderContentModal()}
      </Modal>
    </>
  )
}