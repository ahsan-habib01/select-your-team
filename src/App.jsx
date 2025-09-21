import './App.css';
import { Suspense, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';

const playersPromise = fetch('/players.json').then(res => res.json());

function App() {

  const [toggle, setToggle] = useState(true)

  return (
    <>
      <NavBar></NavBar>

      {/* common nav */}
      <section className="max-w-6xl mx-auto mt-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Available Players</h1>

        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`btn rounded-l-xl border-r-0 font-bold ${
              toggle === true ? 'bg-yellow-300' : ''
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn rounded-r-xl border-l-0 ${toggle=== false ? 'bg-yellow-300': ''}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </section>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl "></span>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <SelectedPlayers></SelectedPlayers>
        </Suspense>
      )}
    </>
  );
}

export default App;
