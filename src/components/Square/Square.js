import React from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      <span className="game-token">{props.value}</span>
    </button>
  );
};

export default Square;
