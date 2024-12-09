import React from "react";
import "./style.css";

const ColorContainer = ({ colorGrade, setColorGrade }) => {
  const changeColor1 = (e) => {
    setColorGrade({ ...colorGrade, colorCode1: e.target.value });
  };

  const changeColor2 = (e) => {
    setColorGrade({ ...colorGrade, colorCode2: e.target.value });
  };
  const generateGradient = () => {
    setColorGrade({
      ...colorGrade,
      fromValueLast: colorGrade.fromValue,
      colorCode1Last: colorGrade.colorCode1,
      colorCode2Last: colorGrade.colorCode2,
    });
  };

  return (
    <div>
      <h2>Pick the Colors</h2>
      <div className="color-container">
        <div className="color-picker">
          <p>{colorGrade.colorCode1}</p>
          <input
            type="color"
            onChange={changeColor1}
            value={colorGrade.colorCode1}
          />
        </div>
        <div className="color-picker">
          <p>{colorGrade.colorCode2}</p>
          <input
            type="color"
            onChange={changeColor2}
            value={colorGrade.colorCode2}
          />
        </div>
      </div>
      <button className="generate-btn" onClick={generateGradient}>
        Generate
      </button>
    </div>
  );
};

export default ColorContainer;
