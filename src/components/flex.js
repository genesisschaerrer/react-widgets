import React, { Component } from "react";

class Flex extends Component {
  constructor() {
    super();

    this.state = {
      textAlign: "center"
    };
  }

  clickHandleLeft = () => {
    const textAlign = this.state.textAlign;

    this.setState({
      textAlign: "left"
    });
  };

  clickHandleCenter = () => {
    const textAlign = this.state.textAlign;

    this.setState({
      textAlign: "center"
    });
  };

  clickHandleRight = () => {
    const textAlign = this.state.textAlign;

    this.setState({
      textAlign: "right"
    });
  };

  render() {
    return (
      <div className="containerDiv">
        <div style={{ textAlign: this.state.textAlign }} className="divText">
          Push Me Around
        </div>
        <button onClick={this.clickHandleLeft}>Left</button>
        <button onClick={this.clickHandleCenter}>Center</button>
        <button onClick={this.clickHandleRight}>Right</button>
      </div>
    );
  }
}

export default Flex;
