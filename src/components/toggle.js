import React, { Component } from "react";
class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      text: "Boo!",
      display: "block"
    };
    // console.log(this.state.display);
  }
  handleClickHide = () => {
    const display = this.state.display === "block" ? "none" : "block";

    this.setState({
      display
    });
  };

  render() {
    // console.log(this.state.display);

    return (
      <div className="containerDiv">
        <div style={{ display: this.state.display }} className="divText">
          {this.state.text}
        </div>
        <button onClick={this.handleClickHide}>
          {this.state.display === "block" ? "Hide Me" : "Show Me"}
        </button>
      </div>
    );
  }
}
export default Toggle;
