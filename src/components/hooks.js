import React, { useEffect, useState } from "react";

export default function Hooks() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const colorsArray = ["blue", "pink", "yellow", "orange", "purple", "green"];

    let intervalId = setInterval(
      () =>
        setColor(colorsArray[Math.floor(Math.random() * colorsArray.length)]),
      1000
    );

    return () => clearInterval(intervalId);
  });

  return (
    <div className="containerDiv" style={{ color: color }}>
      HOOKS
    </div>
  );
}
