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
  const { contract, address, notifyMsg } = ConnectionWithContract(connectMetamask)
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
              {activePage > 0 &&
                <Header activePage={activePage} balance={balance} supply={supply}
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
    </>
  )
}