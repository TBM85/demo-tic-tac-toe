import React, { Component } from "react";

import BlockText from "../UI/BlockText/BlockText";
import Text from "../UI/Text/Text";
import Board from "../Board/Board";
import Button from "../UI/Button/Button";

export default class Game extends Component {
  state = {
    gameStarted: false,
    isWinner: "",
    isDraw: false,
    equisArray: [],
    zeroArray: [],
    finalWinner: "",
  };

  // Gets the data of the "Board" component and uses it
  handlerWinner = (winner, squares) => {
    this.setState({ isWinner: winner });

    // Define all existing "X", "0" and null tokens
    const draw = squares.reduce((obj, square) => {
      if (!obj[square]) {
        obj[square] = 0;
      }
      obj[square]++;
      return obj;
    }, {});

    // Determines when there is a draw in the game
    if (draw["X"] === 5 && !winner) {
      this.setState({ isDraw: true });
    }

    const { equisArray, zeroArray } = this.state;

    if (winner === "X") {
      equisArray.push("X");
    } else if (winner === "O") {
      zeroArray.push("O");
    }

    // Determine the final winner of the game
    if (equisArray.length === 5) {
      this.setState({ finalWinner: "X" });
    } else if (zeroArray.length === 5) {
      this.setState({ finalWinner: "O" });
    }
  };

  // Makes the game start for the first time
  handlerStartGameBtn = () => {
    this.setState({ gameStarted: true });
  };

  // Causes the game to restart
  handlerPlayAgainBtn = () => {
    this.setState({ gameStarted: true });
    this.setState({ isWinner: "" });
    this.setState({ isDraw: false });
  };

  handlerRestartGameBtn = () => {
    this.setState({ gameStarted: true });
    this.setState({ isWinner: "" });
    this.setState({ equisArray: [] });
    this.setState({ zeroArray: [] });
    this.setState({ finalWinner: "" });
  }

  render() {
    const { gameStarted, isWinner, isDraw, equisArray, zeroArray } = this.state;

    let { finalWinner } = this.state;

    return (
      <div className="game">
        <div className="game-board">
          {gameStarted ? (
            !finalWinner ? (
              !isWinner && !isDraw ? (
                <Board onPassDataToGame={this.handlerWinner}  equisArray={equisArray} zeroArray={zeroArray} />
              ) : !isWinner && isDraw ? (
                <BlockText>
                  <Text>
                    <span className="game-token">X O</span>
                    Draw!
                  </Text>
                  <Button className="btn-dark" clicked={this.handlerPlayAgainBtn}>Play Again</Button>
                </BlockText>
              ) : (
                <BlockText>
                  <Text>
                    <span className="game-token">{isWinner}</span>
                    Winner!
                  </Text>
                  <div className="game-result">
                    <div className="result equis-result">
                      <span className="game-token">X</span>- {equisArray.length}
                    </div>
                    <div className="result zero-result">
                      <span className="game-token">0</span>- {zeroArray.length}
                    </div>
                  </div>
                  <Button className="btn-dark" clicked={this.handlerPlayAgainBtn}>Play Again</Button>
                </BlockText>
              )
            ) : (
              <div className="game-winner">
                <span className="winner-player">{finalWinner}</span>
                <span className="winner-text">Winner !</span>
                <Button className="btn-light" clicked={this.handlerRestartGameBtn}>Restart Game</Button>
              </div>
            )
          ) : (
            <BlockText>
              <Text>The game requires two players: "X" and "O".</Text>
              <Text>
                The player who places three of his pieces in a horizontal,
                vertical or diagonal row; win the round.
              </Text>
              <Text>The player who first wins 5 rounds, wins the game.</Text>
              <Button className="btn-dark" clicked={this.handlerStartGameBtn}>Start Game</Button>
            </BlockText>
          )}
        </div>
        <div className="game-info"></div>
      </div>
    );
  }
}
