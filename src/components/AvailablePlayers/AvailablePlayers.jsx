import React from 'react';
import { use } from 'react';

const AvailablePlayers = ({playersPromise}) => {
  
  const playersData = use(playersPromise)
  console.log(playersData)
  return (
    <div>
      <h1>Available {playersData.length}</h1>
    </div>
  );
};

export default AvailablePlayers;