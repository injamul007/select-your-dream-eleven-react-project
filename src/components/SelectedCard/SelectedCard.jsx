import React from "react";
import deleteImg from "../../assets/Vector.png"

const SelectedCard = ({player, removePlayer}) => {
  const {image, name, playing_role} = player

  const handleRemovePlayer = () => {
    removePlayer(player)
  }

  return (
      <div className="border-1 border-gray-300 rounded-xl flex justify-between items-center mt-4 py-3 px-4">
        <div className="left_side flex items-center gap-4">
          <img
            className="rounded-xl w-[74px] h-[70px] object-cover object-fit text-[12px]"
            src={image}
            alt={`${name} image`}
          />
          <div className="info_div">
            <h1 className="font-bold lg:text-2xl text-[17px]">{name}</h1>
            <p className="text-gray-400 lg:text-md text-[15px]">{playing_role}</p>
          </div>
        </div>
        <div className="right_side" onClick={handleRemovePlayer}>
          <img
            className="cursor-pointer active:scale-110"
            src={deleteImg}
            alt="delete_image_btn"
          />
        </div>
      </div>
  );
};

export default SelectedCard;
