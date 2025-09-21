import React, { use } from 'react';
import personImg from '../../assets/person-64.png';
import flagImg from '../../assets/flag-50.png';

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);

// battingStyle: 'Left-Handed';
// bowlingStyle: 'Slow Left-Arm Orthodox';
// country: 'Bangladesh';
// id: 1;
// playerImage: 'https://i.ibb.co/pByn86wn/images.jpg';
// playerName: 'Shakib Al Hasan';
// playingRole: 'All-Rounder';
// price: 6000000;
// rating: 9.3;



  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

      {playerData.map(player => (
        <div key={player.id} className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img className="w-full h-70 object-cover" src={player.playerImage} alt="Shoes" />
          </figure>
          <div className="mt-2">
            <div className="flex">
              <img className="w-10" src={personImg} alt="" />
              <h2 className="card-title ml-2">{player.playerName}</h2>
            </div>

            <div className="flex justify-between items-center my-4 border-b border-gray-200 pb-2">
              <div className="flex items-center gap-2">
                <img className="w-5" src={flagImg} alt="" />
                <span>{player.country}</span>
              </div>
              <button className="btn">{player.playingRole}</button>
            </div>

            <div className="flex justify-between font-bold">
              <span>Rating</span>
              <span>{player.rating}</span>
            </div>

            <div className="flex justify-between my-4">
              <span className="font-bold ">{player.battingStyle}</span>
              <span>{ player.bowlingStyle}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2 font-bold">
                <span>Price:</span>
                <p>
                  $<span>{ player.price}</span>
                </p>
              </div>

              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
