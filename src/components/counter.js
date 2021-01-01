import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      number: 0
    };
  }

  handleClickAdd = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1
      };
    });
  };

  handClickSub = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number - 1
      };
    });
  };

  render() {
    return (
      <div className="containerDiv">
        <div className="divText">{this.state.number}</div>
        <button className="add" onClick={this.handleClickAdd}>
          Add
        </button>
        <button className="sub" onClick={this.handClickSub}>
          Sub
        </button>
      </div>
    );
  }
}

export default Counter;
