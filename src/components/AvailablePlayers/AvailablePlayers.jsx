import React from "react";
import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers}) => {
  const playersData = use(playersPromise);

  return (
    <div className="lg:max-w-[1200px] max-w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

      {
        playersData.map(player => <PlayerCard key={player.name} player={player}
        setAvailableBalance={setAvailableBalance}
        availableBalance={availableBalance}
        purchasedPlayers={purchasedPlayers}
        setPurchasedPlayers={setPurchasedPlayers}
        ></PlayerCard>)
      }
      
    </div>
  );
};

export default AvailablePlayers;
