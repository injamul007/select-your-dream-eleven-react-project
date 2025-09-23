import React from "react";
import { use } from "react";
import userImg from "../../assets/Group.png"
import flagImg from "../../assets/report_1.png"

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="lg:max-w-[1200px] max-w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

      {
        playersData.map(player => <div className="card bg-base-100 shadow-sm p-4">
        <figure>
          <img className="rounded-xl w-full h-[200px] object-cover object-fit"
            src={player.image}
            alt={`${player.name} image`}
          />
        </figure>
        <div className="mt-4">
          <div className="playerNameAndLogo flex items-center">
            <img className="w-4 mr-3" src={userImg} alt="user_logo" /><h2 className="card-title">{player.name}</h2>
          </div>

          <div className="flex items-center justify-between mt-4 mb-2 border-b-1 border-gray-200 pb-2">
            <div className="flex items-center">
              <img className="w-4 mr-3" src={flagImg} alt="flag_logo" />
              <span>{player.country}</span>
            </div>

            <button className="btn bg-gray-300">{player.playing_role}</button>
          </div>

          <div className="flex items-center justify-between font-bold mb-1">
            <span>Rating</span>
            <span>{player.rating}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold">{player.batting_style}</span>
            <span className="text-gray-400">{player.bowling_style}</span>
          </div>

          <div className="card-actions mt-4 flex items-center justify-between">
            <p className="font-bold">Price: $<span>{player.price} USD</span></p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>)
      }
      
    </div>
  );
};

export default AvailablePlayers;
