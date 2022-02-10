import Menu from "../components/Menu";
import Title from "../components/Title"
import { useCallback, useEffect, useState } from "react";
import ContentModalPlay from "../components/Modal/ContentModalPlay";
import 'react-toastify/dist/ReactToastify.css';
import Notify from "../components/Notify";
import ConnectionWithContract from "../components/ConnectionWithContract";
import { useRouter } from "next/router";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default function Game() {

  const router = useRouter()
  const { code } = router.query

  const notify = Notify()

  const { contract, address, notifyMsg } = ConnectionWithContract(0)
  useEffect(() => {
    notify(notifyMsg[0], notifyMsg[1])
  }, [notifyMsg])

  const [option, setOption] = useState(0)

  const renderContent = useCallback(() => {
    if (address) {
      switch (option) {
        case 1:
          return (
            <ContentModalPlay option={option} setOption={setOption} contract={contract} address={address} code={code} />
          )

        case 2:
          return <p>Dashboard!</p>

        case 3:
          return <p>Affiliates!</p>

        case 4:
          return <p>Staking!</p>

        case 5:
          return <p>Settings!</p>

        default:
          return ' ';

      }
    }
  }, [option]);

  return (
    <div className="bg-truck-img sm:bg-truck-img2 bg-cover">
      <div className="bg-slate-900/80 h-screen">
        <Title />
        {renderContent()}
        <div className="fixed bottom-0 left-0 right-0">
          <Menu optionSelected={setOption} />
        </div>
      </div>
    </div>
  )
}