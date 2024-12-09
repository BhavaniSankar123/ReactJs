import React from "react";
import "./style.css";

const Color = ({ value, isActive, colorGrade, setColorGrade, children }) => {
  const directionStyle = {
    backgroundColor: "white",
    opacity: isActive ? "1" : "0.5",
    height: "40px",
    width: "80px",
    borderRadius: "5px",
  };
  const changeFromValue = () => {
    setColorGrade({ ...colorGrade, fromValue: value });
  };

  return (
    <div>
      <button style={directionStyle} onClick={changeFromValue}>
        {children}
      </button>
    </div>
  );
};

export default Color;
