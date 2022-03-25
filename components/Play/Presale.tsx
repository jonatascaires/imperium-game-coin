import Image from "next/image";
import Notify from "../Notify";
let Web3 = require('web3');
import BuyButton from "../Buttons/BuyButton"
import { useEffect, useState } from "react";

interface PresaleProps {
  setActivePage: (v: number) => void
  contract: any
  address: string
  checkBalance: () => void
  language?: string
}

export default function Presale(props: PresaleProps) {

  const notify = Notify()

  const officialAddress = '0xdA8e0fDd998c51D9b59aE543D713b7Ec33C28f77'

  const [qtdPresale, setQtdPresale] = useState(0);
  const [qtdAmountCollected, setQtdAmountCollected] = useState(0);

  const [renderAgain, setRenderAgain] = useState(0)

  const [inputValue, setInputValue] = useState("0.1")

  useEffect(() => {
    props.contract.methods.qtdPresale().call().then((qtdPresale: number) => {
      setQtdPresale(qtdPresale / 100000000)
    }).catch((err: any) => console.log(err))
    props.contract.methods.amountCollected().call().then((qtdAmountCollected: number) => {
      setQtdAmountCollected(qtdAmountCollected / 100000000)
    }).catch((err: any) => console.log(err))
  }, [renderAgain])

  function buyToken() {
    props.contract.methods.buyToken().send({ from: props.address, value: Web3.utils.toWei(inputValue, "ether") }).then((resp: any) => {
      notify(resp.events.EventBuy.returnValues.message, 'success')
      props.checkBalance()
      setRenderAgain(Math.random())
    }).catch((err: any) => {
      notify(err.message, 'error')
    })
  }

  return (
    <div className="text-left px-3">
      <div className="flex items-center gap-3">
        <div onClick={() => props.setActivePage(1)}>
          <Image
            src={`/game-img/back.svg`}
            alt="icon-back"
            width={14}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <span className="text-4xl font-PassionOne">{props.language === 'en' ? 'Presale' : 'Pré-venda'}</span>
      </div>
      <div className="mt-3 text-justify flex flex-col gap-4 font-PassionOne p-3">
        <div>
          {props.language === 'en' ? 'IGC token pre-sales are open.' : 'As pré-vendas do token IGC estão abertas. '}
          {props.language === 'en' ? `A total of 2,000,000 tokens were earmarked for sales at a fixed price of ` : `Um total de 2.000.000 de tokens foram destinados para vendas a um preço fixo de `} <span className="text-yellow-400">0.005 MATIC</span>.
        </div>
        <div>
          {props.language === 'en' ? 'We currently have available:' : 'No momento temos disponível:'}
        </div>
        <div className="text-4xl text-center text-yellow-400">
          {`${qtdPresale} IGC`}
        </div>
        <div>
          {props.language === 'en' ? 'Total amount in MATIC collected:' : 'Valor total em MATIC arrecadado:'}
        </div>
        <div className="text-4xl text-center text-yellow-400">
          {`${qtdAmountCollected / 10000000000} MATIC`}
        </div>
        <div>
          {props.language === 'en' ? '100% of the amount raised from the pre-sale of the tokens will be used to provide liquidity on the IGC listing.' : '100% do valor arrecadado com a pré-venda dos tokens será usado para fornecer liquidez na listagem do IGC.'}
        </div>
        <div className="w-full flex justify-center mt-2">
          <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)} className="text-white text-center bg-black opacity-40 rounded-lg h-10" />
        </div>
        <div className="w-full flex justify-center">
          <BuyButton action={() => buyToken()} className="animate-pulse">{props.language === 'en' ? 'Buy Token' : 'Comprar Token'}</BuyButton>
        </div>
      </div>
    </div>
  )
}