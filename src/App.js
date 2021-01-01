import React from "react";

import Counter from "./components/counter";
import Flex from "./components/flex";
import FontSize from "./components/fontsize";
import Greeting from "./components/greeting";
import Toggle from "./components/toggle";
import Clock from "./components/clock";
import Color from "./components/color";
import Rgb from "./components/rgb";
import Hooks from "./components/hooks";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1 className="header">Widgets</h1>
      <div className="App">
        <Counter />
        <hr />
        <Greeting />
        <hr />
        <Toggle />
        <hr />
        <FontSize />
        <hr />
        <Flex />
        <hr />
        <Clock />
        <hr />
        <Color />
        <hr />
        <Rgb />
        <hr />
        <Hooks />
        <hr />
      </div>
    </div>
  );
}
