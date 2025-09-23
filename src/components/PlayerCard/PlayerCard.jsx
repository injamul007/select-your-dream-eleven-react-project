import React, { useState } from "react";
import userImg from "../../assets/Group.png"
import flagImg from "../../assets/report_1.png"

const PlayerCard = ({player, setAvailableBalance, availableBalance}) => {
  const [isSelected, setIsSelected] = useState(false)

  const {image, name, country, rating, playing_role, batting_style,bowling_style, price} = player;

  const handleIsSelected = () => {
    if(availableBalance < price) {
      alert('Not Enough Coins');
      return;
    }
    setIsSelected(true)
    setAvailableBalance(availableBalance - price)
  }

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img
          className="rounded-xl w-full h-[200px] object-cover object-fit"
          src={image}
          alt={`${name} image`}
        />
      </figure>
      <div className="mt-4">
        <div className="playerNameAndLogo flex items-center">
          <img className="w-4 mr-3" src={userImg} alt="user_logo" />
          <h2 className="card-title">{name}</h2>
        </div>

        <div className="flex items-center justify-between mt-4 mb-2 border-b-1 border-gray-200 pb-2">
          <div className="flex items-center">
            <img className="w-4 mr-3" src={flagImg} alt="flag_logo" />
            <span>{country}</span>
          </div>

          <button className="btn bg-gray-300">{playing_role}</button>
        </div>

        <div className="flex items-center justify-between font-bold mb-1">
          <span>Rating</span>
          <span>{rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold">{batting_style}</span>
          <span className="text-gray-400">{bowling_style}</span>
        </div>

        <div className="card-actions mt-4 flex items-center justify-between">
          <p className="font-bold">
            Price: $<span>{price} USD</span>
          </p>
          <button disabled={isSelected} className='btn' onClick={handleIsSelected}>{isSelected? 'Selected': 'Choose Player'}</button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
