import 'react-toastify/dist/ReactToastify.css';
import Notify from "../components/Notify";
import ConnectionWithContract from "../components/ConnectionWithContract";
import { useCallback, useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Home from '../components/Play/Home';
import Affiliates from '../components/Play/affiliates';
import Staking from '../components/Play/Staking';
import StakingRescue from '../components/Play/StakingRescue';
import Shop from '../components/Play/Shop';
import Garage from '../components/Play/garage';
import Road from '../components/Play/road';
import { parseCookies } from 'nookies'
import Image from 'next/image';
import Whitepaper from '../components/Play/Whitepaper';
import Presale from '../components/Play/Presale';
import EarningsSimulation from '../components/Play/EarningsSimulation';
import Team from '../components/Play/Team';
import Tokenomics from '../components/Play/Tokenomics';
import Roadmap from '../components/Play/Roadmap';

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Index() {

  const cookies = parseCookies()

  let code = 123456789
  if (cookies['imperiumtruck.uplinecode']) {
    code = parseInt(cookies['imperiumtruck.uplinecode'])
  }

  const notify = Notify()

  const [language, setLanguage] = useState('en')

  const [connectMetamask, setConnectMetamask] = useState(0)
  const { contract, address, notifyMsg, contractAddress, addressUser } = ConnectionWithContract(connectMetamask)
  useEffect(() => {
    notify(notifyMsg[0], notifyMsg[1])
  }, [notifyMsg])

  const [balance, setBalance] = useState(0)
  const [supply, setSupply] = useState(0)
  const [burnt, setBurnt] = useState(0)
  const [mined, setMined] = useState(0)
  const [pool, setPool] = useState(0)

  const [loading, setLoading] = useState(false)

  function checkBalance() {
    setLoading(true)
    try {
      contract.methods.balanceOf(address).call().then((balance: number) => {
        setBalance(balance / 100000000)

        contract.methods.totalSupply().call().then((totalSupply: number) => {
          setSupply(totalSupply / 100000000)

          contract.methods.deadCoin().call().then((deadCoin: number) => {
            setBurnt(deadCoin / 100000000)

            contract.methods.miningCoin().call().then((miningCoin: number) => {
              setMined(miningCoin / 100000000)

              contract.methods.gamePool().call().then((gamePool: number) => {
                setPool(gamePool / 100000000)

                setLoading(false)

              }).catch((err: any) => console.log(err))
            }).catch((err: any) => console.log(err))
          }).catch((err: any) => console.log(err))
        }).catch((err: any) => console.log(err))
      }).catch((err: any) => console.log(err))
    } catch (err: any) {
      setActivePage(0)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (contract) {
      contract.methods.totalSupply().call().then((totalSupply: number) => {
        notify("MetaMask Wallet successfully connected", "success")
        setActivePage(1)
        checkBalance()
      }).catch((err: string) => {
        notify("Check which network you are connected to.", "error")
        setActivePage(0)
      })
    }
  }, [contract])

  const [activePage, setActivePage] = useState(0)

  const [selectOption, setSelectOption] = useState('')

  const renderContent = useCallback(() => {
    switch (activePage) {
      case 1:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Shop contract={contract} address={address} code={code} checkBalance={checkBalance} language={language} /></div>

      case 2:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Garage contract={contract} address={address} checkBalance={checkBalance} language={language} /></div>

      case 3:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Road contract={contract} address={address} checkBalance={checkBalance} language={language} /></div>

      case 4:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Affiliates contract={contract} address={address} checkBalance={checkBalance} language={language} /></div>

      case 5:
        return <div className="overflow-y-auto h-[571px] my-3 animate__animated animate__fadeIn"><Staking contract={contract} address={address} checkBalance={checkBalance} language={language} /></div>

      case 6:
        return <div className="overflow-y-auto h-[571px] my-3 animate__animated animate__fadeIn"><StakingRescue contract={contract} address={address} checkBalance={checkBalance} language={language} /></div>

      case 7:
        return <div className="overflow-y-auto h-[675px] my-3 animate__animated animate__fadeIn"><Whitepaper setActivePage={setActivePage} selectOption={selectOption} language={language} /></div>

      case 8:
        return <div className="overflow-y-auto h-[675px] my-3 animate__animated animate__fadeIn"><EarningsSimulation setActivePage={setActivePage} selectOption={selectOption} language={language} /></div>

      case 9:
        return <div className="overflow-y-auto h-[675px] my-3 animate__animated animate__fadeIn"><Tokenomics setActivePage={setActivePage} selectOption={selectOption} language={language} /></div>

      case 10:
        return <div className="overflow-y-auto h-[675px] my-3 animate__animated animate__fadeIn"><Roadmap setActivePage={setActivePage} selectOption={selectOption} language={language} /></div>

      case 11:
        return <div className="overflow-y-auto h-[675px] my-3 animate__animated animate__fadeIn"><Team setActivePage={setActivePage} selectOption={selectOption} language={language} /></div>

      default:
        return <Home connect={() => setConnectMetamask(Math.random())} language={language} />;

    }
  }, [activePage, language, selectOption]);

  return (
    <>
      <div className="flex relative items-center justify-center h-screen overflow-hidden animate__animated animate__fadeIn">
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none bg-black bg-opacity-80 animate__animated animate__fadeIn">
          <div className={`relative flex ${(activePage >= 7 && activePage <= 11) ? 'w-[1000px]' : 'w-[412px]'} h-[700px] justify-center items-center z-30 text-2xl ${activePage > 0 && 'bg-[#1C1C1C] bg-opacity-70'} rounded-xl animate__animated animate__fadeIn scale-90`}>
            <div>
              {(activePage > 0 && activePage < 7) &&
                <Header activePage={activePage} balance={balance} supply={supply} addressUser={addressUser}
                  burnt={burnt} mined={mined} pool={pool} loading={loading} setActivePage={setActivePage} alertGarage={false} alertRoad={false} language={language} />
              }
              {renderContent()}
              {(activePage >= 1 && activePage <= 4) &&
                <Footer setActivePage={setActivePage} language={language} />
              }
            </div>
          </div>
        </div>
        <video autoPlay muted className="hidden sm:block absolute z-10 w-auto min-w-full min-h-full max-w-none animate__animated animate__fadeIn">
          <source src="/game-img/video-background0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <div className="absolute z-10 h-screen w-screen animate__animated animate__fadeIn bg-truck-img bg-cover sm:hidden"></div>
      </div>
      <div className={`flex absolute top-2 h-8 justify-center items-center gap-6 font-OdibeeSans w-screen text-xl text-white ${activePage > 0 && 'hidden'}`}>
        <div className="hidden sm:block cursor-pointer animate-pulse opacity-80 hover:opacity-100" onClick={() => (setActivePage(7), setSelectOption(language === 'en' ? 'Introduction 1/3' : 'Introdução 1/3'))}>{language === 'en' ? 'Whitepaper' : 'Whitepaper'}</div>
        <div className="hidden sm:block cursor-pointer animate-pulse opacity-80 hover:opacity-100" onClick={() => (setActivePage(8), setSelectOption(language === 'en' ? 'Common type simulation 1/3' : 'Simulação de tipo comum 1/3'))}>{language === 'en' ? 'Earnings simulation' : 'Simulação de ganhos'}</div>
        <div className="hidden sm:block cursor-pointer animate-pulse opacity-80 hover:opacity-100" onClick={() => (setActivePage(9), setSelectOption(language === 'en' ? 'Tokenomics' : 'Tokenomics'))}>{language === 'en' ? 'Tokenomics' : 'Tokenomics'}</div>
        <div className="hidden sm:block cursor-pointer animate-pulse opacity-80 hover:opacity-100" onClick={() => (setActivePage(10), setSelectOption(language === 'en' ? 'Roadmap for 2022' : 'Roteiro para 2022'))}>{language === 'en' ? 'Roadmap' : 'Roteiro'}</div>
        <div className="hidden sm:block cursor-pointer animate-pulse opacity-80 hover:opacity-100" onClick={() => (setActivePage(11), setSelectOption(language === 'en' ? 'CEO | Developer' : 'CEO | Desenvolvedor'))}>{language === 'en' ? 'Team' : 'Equipe'}</div>
        <a href="https://www.pinksale.finance/#/launchpad/0x2236C22F28Ab2308FbF3b51E62Fd9366599427cc?chain=BSC" target="_blank" rel="noopener noreferrer" className="cursor-pointer animate-pulse opacity-80 hover:opacity-100">{language === 'en' ? 'Presale' : 'Pré-venda'}</a>
      </div>
      <div className="flex absolute top-3 right-2 h-8 gap-2">
        <div className={`${language === 'en' ? 'opacity-100' : 'opacity-25'} hover:opacity-100 cursor-pointer`}
          onClick={() => setLanguage('en')}>
          <Image
            src={`/game-img/language_en.png`}
            alt="en"
            width={25}
            height={25}
          />
        </div>
        <div className={`${language === 'br' ? 'opacity-100' : 'opacity-25'} hover:opacity-100 cursor-pointer`}
          onClick={() => setLanguage('br')}>
          <Image
            src={`/game-img/language_br.png`}
            alt="en"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="flex absolute top-3 left-2 h-8 gap-2">
        <a target="_blank" href="https://www.instagram.com/imperiumgamecoin" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 cursor-pointer">
          <Image
            src={`/game-img/instagram.svg`}
            alt="en"
            width={18}
            height={18}
          />
        </a>
        <a target="_blank" href="https://t.me/+qMaL9om-oHAzOTFh" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 cursor-pointer">
          <Image
            src={`/game-img/telegram.svg`}
            alt="en"
            width={18}
            height={18}
          />
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCnszNhj-wG66itK_PNPh94A" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 cursor-pointer -mt-0.5">
          <Image
            src={`/game-img/youtube.svg`}
            alt="en"
            width={23}
            height={23}
          />
        </a>
      </div>
      <div className={`flex absolute bottom-0 h-8 bg-black justify-center items-center gap-2 font-OdibeeSans w-screen text-xl text-white ${activePage > 0 && 'hidden'}`}>
        <span className="opacity-80">{language === 'en' ? 'Official Imperium Truck Token' : 'Token Oficial Imperium Truck'}:</span>
        <span className="hidden sm:block text-[#F28B0C] opacity-75 hover:opacity-100 cursor-pointer" onClick={() => { navigator.clipboard.writeText(contractAddress), notify('Official contract copied!', 'success') }}>{contractAddress}</span>
        <span className="text-[#F28B0C] cursor-pointer sm:hidden" onClick={() => { navigator.clipboard.writeText(contractAddress), notify('Official contract copied!', 'success') }}>{contractAddress.substring(0, 10) + '…' + contractAddress.substring(contractAddress.length - 10)}</span>
      </div>
    </>
  )
}