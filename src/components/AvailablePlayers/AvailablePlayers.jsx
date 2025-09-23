import React from "react";
import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance}) => {
  const playersData = use(playersPromise);
  // console.log(playersData);
  return (
    <div className="lg:max-w-[1200px] max-w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

      {
        playersData.map(player => <PlayerCard player={player}
        setAvailableBalance={setAvailableBalance}
        availableBalance={availableBalance}></PlayerCard>)
      }
      
    </div>
  );
};

export default AvailablePlayers;
