import React, { Component } from "react";

import BlockText from "../UI/BlockText/BlockText";
import Text from '../UI/Text/Text';
import Board from '../Board/Board';
import Button from "../UI/Button/Button";

export default class Game extends Component {
  state = {
    gameStarted: false,
    isWinner: ""
  }

  // Gets the data of the "Board" component and uses it
  handlerWinner = (winner) => {
    this.setState({isWinner: winner});
  }

  // Makes the game start for the first time
  handlerStartGameBtn = () => {
    this.setState({gameStarted: true});
  }

  // Causes the game to restart
  handlerPlayAgainBtn = () => {
    this.setState({gameStarted: true});
    this.setState({isWinner: ""});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          {this.state.gameStarted ? (
            !this.state.isWinner ? (
              <Board onPassWinner={this.handlerWinner} />
            ) : (
              <BlockText>
                <Text>
                  <span className="game-token">{this.state.isWinner}</span>
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