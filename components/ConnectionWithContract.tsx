import { useEffect, useState } from "react";
let Web3 = require('web3');
import ImperiumTruck from "../abi/ImperiumTruck";

export default function ConnectionWithContract(connectMetamask: number) {

  const [address, setAddress] = useState(null)
  const [contract, setContract] = useState(null)
  const [notifyMsg, setNotifyMsg] = useState([])

  useEffect(() => {
    if (connectMetamask > 0) {
      let ethereum = window.ethereum;
      let abi = ImperiumTruck()
      let contractAddress = "0xFbf1EA4ad27a7d6a533C5cB41273139B53a66A76"

      window.ethereum ?
        ethereum.request({ method: "eth_requestAccounts" }).then((accounts: any) => {

          setAddress(accounts[0])
          let w3 = new Web3(ethereum)

          let c = new w3.eth.Contract(abi, contractAddress)
          setContract(c)

        }).catch((err: any) => console.log(err.message))
        : setNotifyMsg(["Please install MetaMask!", 'warn'])
    }
  }, [connectMetamask])

  return {
    contract,
    address,
    notifyMsg
  }

}