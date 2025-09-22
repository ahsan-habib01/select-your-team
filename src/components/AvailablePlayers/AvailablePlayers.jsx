import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({
  playersPromise,
  availableBalance,
  setAvailableBalance,
  purchasedPlayers,
  setPurchasedPlayers
}) => {
  const playerData = use(playersPromise);
  // console.log(playerData);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {playerData.map(player => (
        <PlayerCard
          key={player.id}
          player={player}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
