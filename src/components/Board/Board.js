import React, { Component } from "react";
import Square from "../Square/Square";

export default class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    isNext: true,
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.isNext ? "X" : "O";
    this.setState({ squares: squares, isNext: !this.state.isNext });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = this.state.isNext ? "X" : "O";

    return (
      <div>
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
