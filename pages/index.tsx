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

  const renderContent = useCallback(() => {
    switch (activePage) {
      case 1:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Shop contract={contract} address={address} code={code} checkBalance={checkBalance} /></div>

      case 2:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Garage contract={contract} address={address} checkBalance={checkBalance} /></div>

      case 3:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Road contract={contract} address={address} checkBalance={checkBalance} /></div>

      case 4:
        return <div className="overflow-y-auto h-[350px] my-3 animate__animated animate__fadeIn"><Affiliates contract={contract} address={address} checkBalance={checkBalance} /></div>

      case 5:
        return <div className="overflow-y-auto h-[571px] my-3 animate__animated animate__fadeIn"><Staking contract={contract} address={address} checkBalance={checkBalance} /></div>

      case 6:
        return <div className="overflow-y-auto h-[571px] my-3 animate__animated animate__fadeIn"><StakingRescue contract={contract} address={address} checkBalance={checkBalance} /></div>

      case 7:
        return <div className="overflow-y-auto h-[675px] my-3 animate__animated animate__fadeIn"><Whitepaper setActivePage={setActivePage} /></div>

      case 8:
        return <div className="overflow-y-auto h-[675px] my-3 animate__animated animate__fadeIn"><Presale setActivePage={setActivePage} /></div>

      default:
        return <Home connect={() => setConnectMetamask(Math.random())} />;

    }
  }, [activePage]);

  return (
    <>
      <div className="relative flex items-center justify-center h-screen overflow-hidden  animate__animated animate__fadeIn">
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none bg-black bg-opacity-60 animate__animated animate__fadeIn">
          <div className={`relative flex w-[412px] h-[700px] justify-center items-center z-30 text-2xl ${activePage > 0 && 'bg-[#1C1C1C] bg-opacity-70'} rounded-xl animate__animated animate__fadeIn`}>
            <div>
              {(activePage > 0 && activePage < 7) &&
                <Header activePage={activePage} balance={balance} supply={supply} addressUser={addressUser}
                  burnt={burnt} mined={mined} pool={pool} loading={loading} setActivePage={setActivePage} alertGarage={false} alertRoad={false} />
              }
              {renderContent()}
              {(activePage >= 1 && activePage <= 4) &&
                <Footer setActivePage={setActivePage} />
              }
            </div>
          </div>
        </div>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none animate__animated animate__fadeIn">
          <source src="/game-img/video-background2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute -top-12 left-5 opacity-50">
        <Image
          src={`/game-img/binance_smart_chain.svg`}
          alt="time-icon"
          width={200}
          height={180}
        />
      </div>
      <div className="absolute -top-2 right-2 opacity-50">
        <Image
          src={`/game-img/metamask2.svg`}
          alt="time-icon"
          width={130}
          height={130}
        />
      </div>
      <div className="absolute top-5 left-4 opacity-50">
        <Image
          src={`/game-img/PancakeSwap.svg`}
          alt="time-icon"
          width={200}
          height={150}
        />
      </div>
      <div className={`absolute bottom-0 h-8 bg-black opacity-50 flex justify-center items-center gap-2 font-OdibeeSans w-screen text-xl text-white ${activePage > 0 && 'hidden'}`}>
        <span>Official Imperium Truck Token:</span>
        <span className="text-blue-300 cursor-pointer" onClick={() => { navigator.clipboard.writeText(contractAddress), notify('Official contract copied!', 'success') }}>{contractAddress}</span>
        <span className="-mt-1">|</span>
        <span className="text-blue-300 cursor-pointer animate-pulse" onClick={() => setActivePage(7)}>Whitepaper</span>
        <span className="-mt-1">|</span>
        <span className="text-blue-300 cursor-pointer animate-pulse" onClick={() => setActivePage(8)}>Presale</span>
      </div>
    </>
  )
}