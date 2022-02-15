import Image from "next/image";
import { useState } from "react";

interface WhitepaperProps {
  setActivePage: (v: number) => void
}

export default function Whitepaper(props: WhitepaperProps) {

  const options = ['Introduction', 'Token IGC', 'IGC Savings', 'The game', 'Buying a truck', 'To fuel', 'Repair', 'Upgrade', 'Whitdraw', 'Affiliates']
  const [selectedOption, setSelectedOption] = useState(0)

  function renderText(v: number) {
    if (v == 0) {
      return (
        <>
          <span>NFT games are making a huge success on the internet lately.</span>
          <span>They are games made on the blockchain in an innovative virtual game model commonly called “play-to-earn” (play to win).</span>
          <span>A blockchain is used to create a real economy within a virtual world and NFT is what makes a digital item unique to the world — with proven authenticity through information recorded on the blockchain.</span>
          <span>Imperium Truck is an NFT game on Blockchain for players who are lovers about truck.</span>
          <span>The player will be rewarded with Tokens IGC for managing their fleet of trucks...</span>
          <span>Buy new trucks, refuel, make necessary repairs and redeem your reward tokens upon successfully completing deliveries.</span>
        </>
      )
    } else
      if (v == 1) {
        return (
          <>
            <span>The in-game currency is Imperium Game Coin (IGC).</span>
            <span>This token has two characteristics: it is deflationary and also inflationary. That is, with each supply of the truck carried out by the player, 5% of the value will be burned, reducing the money supply. And when the game pool does not have enough resources to pay the player reward, new tokens will be created.</span>
            <span>IGC's initial offering is 1,000,000 units.</span>
            <span>20% (200k IGC) of the starting offer goes to the game pool.</span>
            <span>10% (100k IGC) for Airdrop and strategic partnerships.</span>
            <span>15% (150k IGC) for token pre-sales at a fixed price of $0.30</span>
            <span>55% (550k IGC) for public sale through PancakeSwap at a starting price of $0.50</span>
            <span>The project's proposal is that tokens are scarce, quite scarce, thus causing a great appreciation over time.</span>
          </>
        )
      } else
      if (v == 2) {
        return (
          <>
            <span>For 'cryptoholders', or for those who don't have much patience for games, but who believe in the project's potential, and of course, for all those Imperium Truck lovers who want to increase their earnings even more.</span>
            <span>We offer beautiful rewards for you to keep your tokens with us.</span>
            <span>Lock in your IGC tokens to earn up to 50% annual interest.</span>
            <span>Keep your tokens locked for 15 days for a 10% API (Example: 10000 - 10041 (+41) IGC)</span>
            <span>Keep your tokens locked for 30 days for a 20% API (Example: 10000 - 10164 (+164) IGC)</span>
            <span>Keep your tokens locked for 90 days for a 30% API (Example: 10000 - 10740 (+740) IGC)</span>
            <span>Keep your tokens locked for 180 days for a 40% API (Example: 10000 - 11973 (+1973) IGC)</span>
            <span>Keep your tokens locked for 360 days for a 50% API (Example: 10000 - 14932 (+4932) IGC)</span>
          </>
        )
      } else
      if (v == 3) {
        return (
          <>
            <span>The game is simple and won't take much of your time. All you have to do is manage your truck fleet masterfully, taking care to refuel your trucks when they run out of fuel, send them in for repair when needed, and redeem freight charges when available.</span>
            <span>This is a “play to win” game.</span>
            <span>In this first version the only game mode available is the manager, you just need to manage your fleet, in a future version the playable racing and cargo delivery mode will also be available.</span>
          </>
        )
      } else
      if (v == 4) {
        return (
          <>
            <span>There are three truck options: common, rare and epic.</span>
            <span>They each have pre-set times for resupply, repair and rewards redemption.</span>
            <span>Common - the cost of this truck is 100 IGC. It must be replenished every 9 days, the rewards redemption time is 10 days, and the repair time is 150 days.</span>
            <span>Rare - the cost of this truck is 250 IGC. It must be replenished every 7 days, the rewards redemption time is 8 days, and the repair time is 144 days.</span>
            <span>Epic - the cost of this truck is 600 IGC. It must be replenished every 6 days, the rewards redemption time is 7 days, and the repair time is 114 days.</span>
          </>
        )
      } else
      if (v == 5) {
        return (
          <>
            <span>When it's time to fill up your truck, it will be parked in the garage.</span>
            <span>The restock price is fixed for all trucks and costs 50 IGC.</span>
            <span>Due to possible upgrades to the truck, the fueling cost may be higher.</span>
            <span>5% of the value is burned and subtracted from the total offer.</span>
            <span>5% goes to the development team.</span>
            <span>5% goes to the marketing program, specifically to your mentor (the person who introduced you to the game).</span>
            <span>85% goes to the game pool.</span>
          </>
        )
      } else
      if (v == 6) {
        return (
          <>
            <span>When it's time to fix your truck, it will also be in the garage.</span>
            <span>The repair cost is 75% of the value of the truck.</span>
            <span>Due to possible upgrades on the truck, the repair cost may be higher.</span>
            <span>The weight of this action is greater than the others, it is not possible to refuel or withdraw rewards while your truck is in need of repairs.</span>
          </>
        )
      } else
      if (v == 7) {
        return (
          <>
            <span>Upgrade your truck with 5% off the value.</span>
            <span>Upgrading can be done up to 10th level.</span>
            <span>The update brings advantages to the player, for paying less fees for having fewer trucks to manage and also for having discounts.</span>
            <span>The upgrade is also important for the game's economy as the player needs to stock up on a larger amount of IGC for resupply and repair, causing even more currency shortages in the market.</span>
          </>
        )
      } else
      if (v == 8) {
        return (
          <>
            <span>When it's time to collect the reward, the truck will be on the road.</span>
            <span>The wait time and reward amount will depend on the type of truck you have.</span>
            <span>The common type pays 55 IGC times the truck's current level every 10 days.</span>
            <span>The rare type pays 105 IGC times the truck's current level every 8 days.</span>  
            <span>Epic type pays 155 IGC times the truck's current level every 6 days.</span>   
            <span>It is not possible to collect the reward if the truck needs refueling or repair.</span> 
          </>
        )
      } else
      if (v == 9) {
        return (
          <>
            <span>When you buy your first truck, a unique referral link is released to your account.</span>
            <span>With this link, you can invite, your friends, family, share on your social networks, you can disclose as you prefer.</span>
            <span>You receive a 5% commission on every restock of all your affiliates' trucks.</span>
            <span>There is a limit which is double the amount you have in trucks, even upgrades are included in that account.</span>
            <span>To increase your limit, you need to buy new trucks or upgrade the ones you already have.</span>
            <span>If you have no limit available, the amount will be sent to the game pool.</span>
          </>
        )
      }
  }

  return (
    <div className="text-left px-3">
      <div className="flex items-center gap-3">
        <div onClick={() => props.setActivePage(0)}>
          <Image
            src={`/game-img/back.svg`}
            alt="icon-dashboard"
            width={14}
            height={24}
            className="cursor-pointer"
          />
        </div>
        <span className="text-4xl font-PassionOne">Whitepaper</span>
      </div>
      <div className="mt-3 text-justify flex flex-col gap-4">
        <select className="text-xl text-blue-200 bg-transparent cursor-pointer"
          value={selectedOption}
          onChange={e => setSelectedOption(parseInt(e.target.value))}>
          {options.map((opt, key) => <option className="bg-zinc-800 text-lg" value={key}>{opt}</option>)}
        </select>
        <div className="flex flex-col gap-4 overflow-y-auto h-[525px] p-3 text-base">
          {renderText(selectedOption)}
        </div>
        <div className="flex justify-between font-PassionOne -mt-3 px-2">
          <div className="flex flex-col text-left cursor-pointer" onClick={() => setSelectedOption(selectedOption == 0 ? options.length - 1 : selectedOption - 1)}>
            <span className="text-base text-gray-500">Previous</span>
            <span className="text-xl -mt-2">{selectedOption == 0 ? options[options.length - 1] : options[selectedOption - 1]}</span>
          </div>
          <div className="flex flex-col text-right cursor-pointer" onClick={() => setSelectedOption(selectedOption == (options.length - 1) ? 0 : selectedOption + 1)}>
            <span className="text-base text-gray-500">Next</span>
            <span className="text-xl -mt-2">{selectedOption == (options.length - 1) ? options[0] : options[selectedOption + 1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}