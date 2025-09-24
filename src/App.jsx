import { Suspense, useState } from "react";
import "./App.css";
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
  const [availableBalance, setAvailableBalance] = useState(3000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="lg:max-w-[1200px] max-w-[90%] mx-auto flex justify-between items-center font-bold mb-2">
        <h1 className="text-2xl">
          {toggle ? "Available Players" : "Selected Players"}
        </h1>

        <div>
          <button className={`py-2 px-4 border-1 border-gray-200 rounded-l-lg border-r-0 cursor-pointer ${toggle ? 'bg-[#e7fe29]':'bg-[none]'}`} onClick={()=>setToggle(true)}>
            Available
          </button>
          <button className={`py-2 px-4 border-1 border-gray-200 rounded-r-lg border-l-0 cursor-pointer ${toggle === false ? 'bg-[#e7fe29]':'bg-[none]'}`} onClick={()=>setToggle(false)}>
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
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
