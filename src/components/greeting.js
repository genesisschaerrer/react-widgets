import React, { Component } from "react";

class Greeting extends Component {
  constructor() {
    super();

    this.state = {
      greeting: "Ciao"
    };
    // console.log(this.state.greeting);
  }

  handleClickToggle = () => {
    const greeting =
      this.state.greeting === "Ciao" ? "Auf Wiedersehen" : "Ciao";

    this.setState({
      greeting
    });
  };

  render() {
    return (
      <div className="containerDiv">
        <div className="divText">{this.state.greeting}</div>
        <button onClick={this.handleClickToggle}>Toggle</button>
      </div>
    );
  }
}

export default Greeting;
