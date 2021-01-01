import React, { Component } from "react";
import moment from "moment";

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      time: moment().format("h:mm:ss a")
    };
  }

  clockRender = () => {
    // Sets new state with new date

    let time = moment().format("h:mm:ss a");

    this.setState({
      time
    });
  };

  componentDidMount() {
    // set the interval right away
    // setInterval
    this.tick = setInterval(this.clockRender, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    return (
      <div className="clock">{this.state.time}</div>
      // {setInterval(()=>{moment().format("h:mm:ss a")},1000)}
      // {setInterval(this.clockRender, 1000)}
    );
  }
}

export default Clock;
