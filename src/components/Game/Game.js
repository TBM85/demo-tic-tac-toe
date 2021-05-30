import React, { Component } from "react";

import BlockText from "../UI/BlockText/BlockText";
import Text from '../UI/Text/Text';
import Board from '../Board/Board';
import Button from "../UI/Button/Button";

export default class Game extends Component {
  state = {
    gameStarted: false
  }

  handlerStartGameBtn = () => {
    this.setState({gameStarted: true});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          {!this.state.gameStarted ?
            <BlockText>
              <Text>Get three of your marks placed in a row horizontally, vertically or diagonally</Text>
              <Button clicked={this.handlerStartGameBtn}>Start Game</Button>
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