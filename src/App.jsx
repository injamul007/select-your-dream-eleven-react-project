import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Loader from "./components/Loader/Loader";


const fetchPlayersPromise = async () => {
  const res = await fetch('/Players.json')
  return res.json();
}

function App() {

  const playersPromise = fetchPlayersPromise();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Loader></Loader>}>
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
