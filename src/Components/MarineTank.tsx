import React from 'react';
import '../Styles/MarineTank.css'; 

function MarineTank() {
  return (
    <div className="marine-tank-container">

      <div className="marine-tank-gif">
        <img src="/path-to-your-marine-tank-gif.gif" alt="Marine Tank" />
      </div>

 
      <div className="dials-container">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="dial">
            <div className="dial-content">Dial {index + 1}</div>
          </div>
        ))}
      </div>

      <div className="sliders-container">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="slider-container">
            <label htmlFor={`slider-${index}`} className="slider-label">
              Control {index + 1}
            </label>
            <input
              type="range"
              id={`slider-${index}`}
              className="slider"
              min="0"
              max="100"
              step="1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarineTank;
