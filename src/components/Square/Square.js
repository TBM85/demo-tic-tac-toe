import React, { Component } from "react";

export default class Square extends Component {
  state = {
    value: null,
  };

  returnsAnXHandler = () => {
    this.setState({ value: "X" });
  };

  render() {
    return (
      <button className="square" onClick={this.returnsAnXHandler}>
        <span>{this.state.value}</span>
      </button>
    );
  }
}
