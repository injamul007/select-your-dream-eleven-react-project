import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({purchasedPlayers, removePlayer, setToggle}) => {

  return (
    <div className='lg:max-w-[1200px] max-w-[90%] mx-auto'>
      {
        purchasedPlayers.map(player => <SelectedCard key={player.name} player={player}
        removePlayer={removePlayer}></SelectedCard>)
      }
      <button onClick={()=>setToggle(true)} className="btn mt-8 bg-amber-300">Add More Player</button>
    </div>
  );
};

export default SelectedPlayers;