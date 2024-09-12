import '../Styles/PlantedTank.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function PlantedTank() {
  return (
    <div className="planted-tank-container">
 
     <h1>Planted Tank</h1>

      <div className='planted-display'>
      <div className="planted-tank-gif">
        <img src="src/Assets/planted.jpg" alt="Planted Tank" />
      </div>

      <div className="dials-container">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="dial">
            <div className="dial-content">Dial {index + 1}</div>
          </div>
        ))}
      </div>
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
