import Image from "next/image";
import NavButton from "../Buttons/NavButton";
import ReactLoading from "react-loading";

interface HeaderProps {
  activePage: number
  balance: number
  supply: number
  burnt: number
  mined: number
  pool: number
  loading: boolean
  setActivePage: (v: number) => void
  alertGarage: boolean
  alertRoad: boolean
  addressUser: string
  language?: string
}

export default function Header(props: HeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div onClick={() => props.activePage < 5 ? props.setActivePage(0) : props.setActivePage(1)}>
          {props.activePage < 5 ?
            <Image
              src={`/game-img/close.svg`}
              alt="icon-close"
              width={14}
              height={24}
              className="cursor-pointer"
            />
            :
            <Image
              src={`/game-img/back.svg`}
              alt="icon-back"
              width={14}
              height={24}
              className="cursor-pointer"
            />
          }
        </div>
        <div className="flex justify-center items-center gap-2">
          <span className="text-2xl font-PassionOne">{props.addressUser}</span>
          <Image
            src={`/game-img/balance-diamond.svg`}
            alt="icon-dashboard"
            width={28}
            height={28}
          />
          <span className="text-2xl font-PassionOne">
            {props.loading ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : props.balance}
          </span>
        </div>
      </div>
      <div className={`grid grid-rows-2 grid-cols-2 gap-3 mt-3 mb-3 ${(props.activePage === 5 || props.activePage === 6) && 'hidden'}`}>
        <div className="flex">
          <Image
            src={`/game-img/header-supply.svg`}
            alt="icon-dashboard"
            width={41}
            height={41}
          />
          <div className="flex flex-col ml-1">
            <span className="text-[#797979] text-sm font-PassionOne">{props.language === 'en' ? 'Max. Supply' : 'Fornecimento máximo'}</span>
            <span className="text-2xl font-PassionOne -mt-2">
              {props.loading ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : props.supply}
            </span>
          </div>
        </div>
        <div className="flex">
          <Image
            src={`/game-img/header-burnt.svg`}
            alt="icon-dashboard"
            width={41}
            height={41}
          />
          <div className="flex flex-col ml-1">
            <span className="text-[#797979] text-sm font-PassionOne">{props.language === 'en' ? 'Burnt Supply' : 'Fornecimento queimado'}</span>
            <span className="text-2xl font-PassionOne -mt-2">
              {props.loading ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : props.burnt}
            </span>
          </div>
        </div>
        <div className="flex">
          <Image
            src={`/game-img/header-mined.svg`}
            alt="icon-dashboard"
            width={41}
            height={41}
          />
          <div className="flex flex-col ml-1">
            <span className="text-[#797979] text-sm font-PassionOne">{props.language === 'en' ? 'Mined Supply' : 'Fornecimento minerado'}</span>
            <span className="text-2xl font-PassionOne -mt-2">
              {props.loading ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : props.mined}
            </span>
          </div>
        </div>
        <div className="flex">
          <Image
            src={`/game-img/header-pool.svg`}
            alt="icon-dashboard"
            width={41}
            height={41}
          />
          <div className="flex flex-col ml-1">
            <span className="text-[#797979] text-sm font-PassionOne">{props.language === 'en' ? 'Game Pool' : 'Pool de jogos'}</span>
            <span className="text-2xl font-PassionOne -mt-2">
              {props.loading ? <ReactLoading type="bubbles" width={25} className="-mb-9" /> : props.pool}
            </span>
          </div>
        </div>
      </div>
      <div className={`flex justify-between gap-3 
      ${(props.activePage === 5 || props.activePage === 6) && 'hidden'}`}>
        <NavButton name={props.language === 'en' ? "Shop" : 'Comprar'} fontSize="text-2xl"
          inative={props.activePage === 1 ? false : true}
          alert={false}
          action={() => props.setActivePage(1)}
        />
        <NavButton name={props.language === 'en' ? "Garage" : 'Garagem'} fontSize="text-2xl"
          inative={props.activePage === 2 ? false : true}
          alert={props.alertGarage}
          action={() => props.setActivePage(2)}
        />
        <NavButton name={props.language === 'en' ? "Road" : 'Estrada'} fontSize="text-2xl"
          inative={props.activePage === 3 ? false : true}
          alert={props.alertRoad}
          action={() => props.setActivePage(3)}
        />
      </div>
      <div className={`flex justify-center gap-6 
      ${(props.activePage !== 5 && props.activePage !== 6) && 'hidden'}`}>
        <NavButton name={props.language === 'en' ? "Savings" : 'Poupança'} fontSize="text-2xl"
          inative={props.activePage === 5 ? false : true}
          alert={false}
          action={() => props.setActivePage(5)}
        />
        <NavButton name={props.language === 'en' ? "Recover" : 'Recuperar'} fontSize="text-2xl"
          inative={props.activePage === 6 ? false : true}
          alert={props.alertGarage}
          action={() => props.setActivePage(6)}
        />
      </div>
    </div>
  )
}