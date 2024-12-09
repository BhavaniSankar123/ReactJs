import React, { useState } from "react";
import Color from "./Color";
import "./style.css";
import ColorContainer from "./ColorContainer";

const gradientDirections = [
  { directionId: "TOP", directionValue: "top", displayText: "Top" },
  { directionId: "BOTTOM", directionValue: "bottom", displayText: "Bottom" },
  { directionId: "RIGHT", directionValue: "right", displayText: "Right" },
  { directionId: "LEFT", directionValue: "left", displayText: "Left" },
  {
    directionId: "TOP LEFT",
    directionValue: "top left",
    displayText: "Top Left",
  },
  {
    directionId: "TOP RIGHT",
    directionValue: "top right",
    displayText: "Top Right",
  },
  {
    directionId: "BOTTOM RIGHT",
    directionValue: "bottom right",
    displayText: "Bottom Right",
  },
  {
    directionId: "BOTTOM LEFT",
    directionValue: "bottom left",
    displayText: "Bottom Left",
  },
];
const Gradient = () => {
  const [colorGrade, setColorGrade] = useState({
    fromValueLast: "top",
    colorCode1Last: "#8ae323",
    colorCode2Last: "#014f7b",
    fromValue: "top",
    colorCode1: "#8ae323",
    colorCode2: "#014f7b",
  });

  const mainContainer = {
    background: `linear-gradient(to ${colorGrade.fromValueLast}, ${colorGrade.colorCode1Last}, ${colorGrade.colorCode2Last} )`,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div style={mainContainer}>
      <h1>Generate a CSS Color Gradient</h1>
      <h3>Choose Direction</h3>
      <div className="gradient-from">
        {gradientDirections.map((item) => (
          <Color
            key={item.directionId}
            value={item.directionValue}
            colorGrade={colorGrade}
            isActive={item.directionValue === colorGrade.fromValue}
            setColorGrade={setColorGrade}
          >
            {item.displayText}
          </Color>
        ))}
      </div>
      <ColorContainer colorGrade={colorGrade} setColorGrade={setColorGrade} />
    </div>
  );
};

export default Gradient;
