import React from 'react';

const Button = (props) => {
  return (
    <button className={`btn ${props.className}`} type="button" onClick={props.clicked}>{props.children}</button>
  );
};

export default Button;