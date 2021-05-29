import React from 'react';
import Square from '../Square/Square';

const Game = () => {
  return (
    <div className="game">
      <div className="game-board"><Square /></div>
      <div className="game-info"></div>
    </div>
  );
};

export default Game;