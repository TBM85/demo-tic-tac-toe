import React, { Component } from "react";

import BlockText from "../UI/BlockText/BlockText";
import Text from '../UI/Text/Text';
import Board from '../Board/Board';

export default class Game extends Component {
  state = {
    gameStarted: false
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          {!this.state.gameStarted ?
            <BlockText>
              <Text>Get three of your marks placed in a row horizontally, vertically or diagonally</Text>
            </BlockText>
          :
            <Board />
          }
        </div>
        <div className="game-info"></div>
      </div>
    )
  }
}