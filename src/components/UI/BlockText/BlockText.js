import React from 'react';

const BlockText = (props) => {
  return (
    <div className="game-block">
      {props.children}
    </div>
  );
};

export default BlockText;