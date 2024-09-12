import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlantedTank from './PlantedTank';
import MarineTank from './MarineTank';
import "../Styles/Home.css"

const HomePage = () => {
  const navigate = useNavigate();
  const [isPlantedTank, setIsPlantedTank] = useState(() => {
    const savedTank = localStorage.getItem('isPlantedTank');
    return savedTank !== null ? JSON.parse(savedTank) : true;
  });

  useEffect(() => {
    localStorage.setItem('isPlantedTank', JSON.stringify(isPlantedTank));
  }, [isPlantedTank]);

  const toggleTank = () => {
    setIsPlantedTank(!isPlantedTank);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    console.log('User logged out');
    navigate('/');    
  };

  return (
    <div className="home-page">
      <div className="tank-container">
        {isPlantedTank ? <PlantedTank /> : <MarineTank />}
      </div>
      <div className="overlay-buttons">
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isPlantedTank}
            onChange={toggleTank}
            id="tankToggle"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
