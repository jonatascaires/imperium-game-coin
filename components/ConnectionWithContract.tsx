import { useEffect, useState } from "react";
let Web3 = require('web3');
import ImperiumTruck from "../abi/ImperiumTruck";

export default function ConnectionWithContract(connectMetamask: number) {

  const [address, setAddress] = useState(null)
  const [contract, setContract] = useState(null)
  const [notifyMsg, setNotifyMsg] = useState([])
  const [addressUser, setAddressUser] = useState('')

  const contractAddress = "0x667dC575c8Dc90eb20BDC515ccce1C2AD3B1a9bE"

  useEffect(() => {
    if (connectMetamask > 0) {
      let ethereum = window.ethereum;
      let abi = ImperiumTruck()     

      window.ethereum ?
        ethereum.request({ method: "eth_requestAccounts" }).then((accounts: any) => {

          setAddress(accounts[0])
          setAddressUser(accounts[0].substring(0, 5)+'…'+accounts[0].substring(accounts[0].length - 4))
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
    notifyMsg,
    contractAddress,
    addressUser
  }

}