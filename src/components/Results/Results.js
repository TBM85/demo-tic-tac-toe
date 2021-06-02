import React from "react";

const Results = (props) => {
  return (
    <div className={`results ${props.className}`}>
      <div className="result">
        <span className="game-token">X : </span>
        {props.equisArray.length}
      </div>
      <div className="result">
        <span className="game-token">O : </span>
        {props.zeroArray.length}
      </div>
    </div>
  );
};

export default Results;
