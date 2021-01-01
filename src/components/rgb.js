import React, { Component } from "react";

class Rgb extends Component {
  constructor() {
    super();

    this.state = {
      r: 0,
      g: 0,
      b: 0
    };
  }

  handleR = (event) => {
    let r = this.state.r;

    this.setState({
      r: event.target.value
    });
  };

  handleG = (event) => {
    let g = this.state.g;

    this.setState({
      g: event.target.value
    });
  };

  handleB = (event) => {
    let b = this.state.b;

    this.setState({
      b: event.target.value
    });
  };

  rgb = () => {
    const border = {
      border: `solid 30px rgb(${this.state.r}, ${this.state.g}, ${this.state.b})`
    };
    return border;
  };

  render() {
    return (
      <div className="containerDiv">
        <div className="border" style={this.rgb()}></div>
        <div>
          rgb({this.state.r}, {this.state.g}, {this.state.b})
        </div>
        <form>
          <input
            name="r"
            type="range"
            defaultValue="0"
            min="0"
            max="255"
            onChange={this.handleR}
          />

          <input
            name="g"
            type="range"
            defaultValue="0"
            min="0"
            max="255"
            onChange={this.handleG}
          />

          <input
            name="b"
            type="range"
            defaultValue="0"
            min="0"
            max="255"
            onChange={this.handleB}
          />
        </form>
      </div>
    );
  }
}

export default Rgb;
