import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Styles/MarineTank.css';

interface SensorData {
  Temperature: number;
  Nitrate: number;
  Calcium: number;
  FlowSpeed: number;
  pH: number;
  LightIntensity: number;
  Alkalinity: number;
  Nitrite: number;
}

const MarineTank: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch('http://localhost:8084/sensor/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: SensorData = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchSensorData();
  }, []);

  if (!sensorData) {
    return <div>Loading sensor data...</div>;
  }

  const sensorLabels: (keyof SensorData)[] = [
    'Temperature',
    'Nitrate',
    'Calcium',
    'FlowSpeed',
    'pH',
    'LightIntensity',
    'Alkalinity',
    'Nitrite'
  ];

  return (
    <div className="marine-tank-container">
      <h1>Marine Tank</h1>

      <div className="marine-display">
        <div className="marine-tank-gif">
          <img src="src/Assets/marine.jpg" alt="Marine Tank" />
        </div>

        <div className="dials-container">
          {sensorLabels.map((label, index) => (
            <div key={index} className="dial">
              <div className="circular-progress-container">
                <CircularProgressbar
                  value={sensorData[label]}
                  text={`${sensorData[label].toFixed(2)}`}
                  styles={buildStyles({
                    textColor: '#fff',
                    pathColor: '#4caf50',
                    trailColor: '#d6d6d6',
                  })}
                  maxValue={100}
                />
              </div>
              <div className="dial-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="sliders-container">
        {sensorLabels.map((label, index) => (
          <div key={index} className="slider-container">
            <label htmlFor={`slider-${index}`} className="slider-label">
              Control {label}
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
};

export default MarineTank;
