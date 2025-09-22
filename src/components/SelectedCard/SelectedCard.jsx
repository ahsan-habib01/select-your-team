import React from 'react';
import deleteImg from '../../assets/delete-100.png';


const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);

  const handleRemove = () =>{
    removePlayer(player)
  }

  return (
    <section className="border-2 border-gray-200 rounded-xl flex justify-between items-center mt-4 p-4">
      {/* left */}
      <div className="flex items-center gap-5">
        <img
          className="w-20 h-20 rounded-xl p"
          src={player.playerImage}
          alt=""
        />
        <div>
          <h1 className="text-xl font-semibold">{player.playerName}</h1>
          <p className="text-sm">{player.playingRole}</p>
        </div>
      </div>

      {/* right */}
      <div onClick={handleRemove}>
        <img className="w-8" src={deleteImg} alt="" />
      </div>
    </section>
  );
};

export default SelectedCard;