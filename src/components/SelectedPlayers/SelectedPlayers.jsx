import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  // console.log(purchasedPlayers);

  return (
    <div className="max-w-6xl mx-auto">
      {purchasedPlayers.map(player => (
        <SelectedCard
          key={player.id}
          player={player}
          removePlayer={removePlayer}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
