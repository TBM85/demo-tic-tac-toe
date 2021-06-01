import React, { Component } from "react";

import Square from "../Square/Square";

export default class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    isNext: true
  };

  // Handles what happens when a square is clicked
  handleClick = (i) => {
    const squares = this.state.squares.slice();

    // Ignore a click if someone has won the game or if a square is already filled
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isNext ? "X" : "O";
    this.setState({ squares: squares, isNext: !this.state.isNext });

    // Sends data to the "Game" component
    const winner = this.calculateWinner(squares);

    this.props.onPassWinner(winner);
  }

  // Reproduce a square
  renderSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  // Calculate who is the winning player
  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const status = this.state.isNext ? "X" : "O";

    return (
      <div className="board-container">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="status">
          It's <span>{status}</span>'s turn to play
        </div>
      </div>
    );
  }
}