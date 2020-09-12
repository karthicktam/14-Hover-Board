import React, { useState, useEffect } from "react";
import "./styles.css";

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES_NR = 500;

export default function App() {
  const [background, setBackground] = useState("#1d1d1d");
  const [boxShadow, setBoxShadow] = useState(`0 0 2px #000`);
  const [squares, setSquares] = useState([]);
  const [index, setIndex] = useState(0);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const mouseOverHandler = (id) => {
    const color = getRandomColor();
    setBackground(color);
    setBoxShadow(`0 0 2px ${color}, 0 0 10px ${color}`);
    setIndex(id);
  };

  const mouseOutHandler = (id) => {
    setBackground("#1d1d1d");
    setBoxShadow(`0 0 2px #000`);
    setIndex(id);
  };

  useEffect(() => {
    const loopFn = () => {
      for (let i = 0; i < SQUARES_NR; i++) {
        let value = {
          background: background,
          boxShadow: boxShadow
        };

        setSquares((state) => [...state, value]);
      }
    };

    loopFn();
  }, []);

  return (
    <div className="container">
      {squares.map((el, idx) => (
        <div
          key={idx}
          className="square"
          style={{
            background: index === idx ? background : "#1d1d1d",
            boxShadow: index === idx ? boxShadow : `0 0 2px #000`
          }}
          onMouseOver={() => mouseOverHandler(idx)}
          onMouseOut={() => mouseOutHandler(idx)}
        ></div>
      ))}
    </div>
  );
}
