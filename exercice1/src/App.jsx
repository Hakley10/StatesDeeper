import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${(score / 10) * 100}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (score >= 4 ) scoreColor = "#c4d647"; 
    if (score >= 7) scoreColor = "#b2ff47";
    if (score >= 10) scoreColor = "#88c057";
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      transition: "width 0.3s ease-in-out",
    };
  };

  const handleScoreChange = (event) => {
    setScore(Number(event.target.value));
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleScoreChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}