import './App.css';
import { Suspense, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import { ToastContainer } from 'react-toastify';

const playersPromise = fetch('/players.json').then(res => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(50000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);

  const removePlayer = p => {
    const filteredData = purchasedPlayers.filter(ply => ply.id !== p.id);
    console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>

      {/* common nav */}
      <section className="max-w-6xl mx-auto mt-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          {toggle === true
            ? 'Available Players'
            : `'Selected Players (${purchasedPlayers.length}/6)'`}
        </h1>

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
            className={`btn rounded-r-xl border-l-0 ${
              toggle === false ? 'bg-yellow-300' : ''
            }`}
          >
            Selected ({purchasedPlayers.length})
          </button>
        </div>
      </section>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl "></span>
          }
        >
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense>
          <SelectedPlayers
            purchasedPlayers={purchasedPlayers}
            removePlayer={removePlayer}
          ></SelectedPlayers>
        </Suspense>
      )}

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
