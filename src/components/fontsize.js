import React, { Component } from "react";

class FontSize extends Component {
  constructor() {
    super();

    this.state = {
      font: 25,
      isGrowing: true,
      isShrinking: false
    };
  }

  handleClickGrow = () => {
    let font = this.state.font + 5;
    // let isGrowing = this.state.isGrowing ?

    this.setState({
      font
    });
  };

  handleClickShrinking = () => {
    let font = this.state.font - 5;
    // let isGrowing = this.state.isGrowing ?

    this.setState({
      font
    });
  };

  render() {
    return (
      <div className="containerDiv">
        <div style={{ fontSize: this.state.font }} className="divText">
          {this.state.font}
        </div>
        <button onClick={this.handleClickGrow}>Grow</button>
        <button onClick={this.handleClickShrinking}>Shrink</button>
      </div>
    );
  }
}

export default FontSize;
