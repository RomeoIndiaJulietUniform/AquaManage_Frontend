import React from 'react';
import '../Styles/PlantedTank.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function PlantedTank() {
  return (
    <div className="planted-tank-container">
      <div className="planted-tank-gif">
        <img src="/path-to-your-planted-tank-gif.gif" alt="Planted Tank" />
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

export default PlantedTank;
