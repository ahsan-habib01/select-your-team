import './App.css';
import NavBar from './components/NavBar/NavBar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { Suspense } from 'react';

const playersPromise = fetch('/players.json').then(res => res.json());

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>

      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
