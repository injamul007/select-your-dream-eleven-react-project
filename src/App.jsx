import React from "react";
import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Loader from "./components/Loader/Loader";

const fetchPlayersPromise = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};

const playersPromise = fetchPlayersPromise();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(30000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    const filteredData = purchasedPlayers.filter(plr => plr.name !== p.name)
    console.log(filteredData)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance + p.price);
  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="lg:max-w-[1200px] max-w-[90%] mx-auto flex justify-between items-center font-bold mb-2">
        <h1 className="lg:text-2xl text-[15px]">
          {toggle ? "Available Players" : `Selected Player(${purchasedPlayers.length }/6)`}
        </h1>

        <div>
          <button className={`lg:py-2 lg:px-4 py-1 px-2 lg:text-[16px] text-[15px] border-1 border-gray-200 rounded-l-lg border-r-0 cursor-pointer ${toggle ? 'bg-[#e7fe29]':'bg-[none]'}`} onClick={()=>setToggle(true)}>
            Available
          </button>
          <button className={`lg:py-2 lg:px-4 py-1 px-2 lg:text-[16px] text-[15px] border-1 border-gray-200 rounded-r-lg border-l-0 cursor-pointer ${toggle === false ? 'bg-[#e7fe29]':'bg-[none]'}`} onClick={()=>setToggle(false)}>
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle ? (
        <Suspense fallback={<Loader></Loader>}>
          <AvailablePlayers playersPromise={playersPromise}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers}
        removePlayer={removePlayer}></SelectedPlayers>
      )}

      <ToastContainer />
    </>
  );
}

export default App;
