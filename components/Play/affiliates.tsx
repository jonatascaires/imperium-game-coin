import Image from "next/image";
import { useEffect, useState } from "react";
import Notify from "../Notify";
import ReactLoading from "react-loading";

interface AffiliatesProps {
  contract: any
  address: string
  checkBalance: () => void
  language?: string
}

export default function Affiliates(props: AffiliatesProps) {

  const notify = Notify()

  const [maximumRelationship, setMaximumRelationship] = useState(0)

  useEffect(() => {
    props.contract.methods.maximumRelationshipBonus(props.address).call().then((bonus: number) => {
      setMaximumRelationship(bonus / 100000000)
      props.contract.methods.getTrucksByOwner(props.address).call().then((result: string[]) => {
        props.contract.methods.trucks(result[0]).call().then((code: any) => {
          setLinkReference(`https://imperiumtruck.com/ref/${code.uniqueId}`)
          setLoadingPage(false)
        }).catch((err: string) => console.log(err))
      }).catch((err: string) => console.log(err))
    }).catch((err: string) => console.log(err))
  }, [])

  const [linkReference, setLinkReference] = useState('')

  const [loadingPage, setLoadingPage] = useState(true)

  return (
    <div className="font-OdibeeSans flex flex-col gap-2 text-center animate__animated animate__fadeIn">
      <div className="flex justify-center items-center gap-5">
        <div className="font-bold flex flex-col">
          <span className="text-2xl">{props.language === 'en' ? 'AFFILIATE' : 'PROGRAMA DE'}</span>
          <span className="text-[#508AFB] text-5xl">{props.language === 'en' ? 'BONUS' : 'BÔNUS'}</span>
          <span className="text-2xl">{props.language === 'en' ? 'PROGRAM' : 'POR AFILIADO'}</span>
        </div>
        <div>
          <Image
            src={`/game-img/marketing.svg`}
            alt="marketing"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div>
        <div className="bg-[#508AFB] bg-opacity-70 font-PassionOne rounded-t-lg
              flex justify-center items-center h-10 text-xl">
          {props.language === 'en' ? 'YOUR AVAILABLE BONUS LIMIT' : 'SEU LIMITE DE BÔNUS DISPONÍVEL'}
        </div>
        <div className="flex justify-center items-center h-10 bg-[#272727] font-PassionOne bg-opacity-70
              rounded-b-lg">
          {loadingPage ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : maximumRelationship + ' IGC'}
        </div>
      </div>
      <div>
        <div className="bg-[#A35FD9] bg-opacity-70 font-PassionOne rounded-t-lg
              flex justify-center items-center h-10 text-xl">
          {props.language === 'en' ? 'YOUR LINK TO REFERENCES' : 'SEU LINK PARA REFERÊNCIAS'}
        </div>
        <div className="flex justify-center items-center h-12 bg-[#272727] font-PassionOne bg-opacity-70
              rounded-b-lg font-normal text-lg cursor-pointer" onClick={() => { navigator.clipboard.writeText(linkReference), notify('Referral link copied!', 'success') }}>
          {loadingPage ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : linkReference}
        </div>
      </div>
    </div>
  )
}