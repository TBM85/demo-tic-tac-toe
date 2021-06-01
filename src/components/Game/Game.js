import React, { Component } from "react";

import BlockText from "../UI/BlockText/BlockText";
import Text from '../UI/Text/Text';
import Board from '../Board/Board';
import Button from "../UI/Button/Button";

export default class Game extends Component {
  state = {
    gameStarted: false,
    isWinner: "",
    isDraw: false
  }

  // Gets the data of the "Board" component and uses it
  handlerWinner = (winner, squares) => {
    this.setState({isWinner: winner});

    // Define all existing "X", "0" and null tokens
    const draw = squares.reduce((obj, square) => {
      if (!obj[square]) {
        obj[square] = 0;
      }
      obj[square]++;
      return obj;
    }, {});

    // Determines when there is a draw in the game
    if ((draw["X"] === 5) && !winner) {
      this.setState({isDraw: true});
    }
  }

  // Makes the game start for the first time
  handlerStartGameBtn = () => {
    this.setState({gameStarted: true});
  }

  // Causes the game to restart
  handlerPlayAgainBtn = () => {
    this.setState({gameStarted: true});
    this.setState({isWinner: ""});
    this.setState({isDraw: false});
  }

  render() {
    const { gameStarted, isWinner, isDraw } = this.state;

    return (
      <div className="game">
        <div className="game-board">
          {gameStarted ? (
            !isWinner && !isDraw ? (
              <Board onPassDataToGame={this.handlerWinner} />
            ) : !isWinner && isDraw ? (
              <BlockText>
                <Text>
                  <span className="game-token">X O</span>
                  Draw!
                </Text>
                <Button clicked={this.handlerPlayAgainBtn}>Play Again</Button>
              </BlockText>
            ) : (
              <BlockText>
                <Text>
                  <span className="game-token">{isWinner}</span>
                  Winner!
                </Text>
                <Button clicked={this.handlerPlayAgainBtn}>Play Again</Button>
              </BlockText>
            )
          ) : (
            <BlockText>
              <Text>Get three of your marks placed in a row horizontally, vertically or diagonally</Text>
              <Button clicked={this.handlerStartGameBtn}>Start Game</Button>
            </BlockText>
          )}
        </div>
        <div className="game-info"></div>
      </div>
    )
  }
}