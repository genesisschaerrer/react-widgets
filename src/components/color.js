import React, { Component } from "react";

class Color extends Component {
  constructor() {
    super();

    this.state = {
      color: "Change Me",
      colorInput: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      color: this.state.colorInput,
      colorInput: ""
    });
  };

  handleChange = (event) => {
    this.setState({
      colorInput: event.target.value
    });
  };

  render() {
    return (
      <div className="containerDiv">
        <div style={{ color: this.state.color }} className="divText">
          {this.state.color}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="color"
            type="text"
            value={this.state.colorInput}
            onChange={this.handleChange}
            placeholder="Enter Color"
            className="inputText"
          />
          <button type="submit">Change Color</button>
        </form>
      </div>
    );
  }
}

export default Color;
