import { useState } from "react";

export default function Button () {
    const [degreeValue, setTemperatureValue] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold");
  
    const highTemperature = () => {
      if (degreeValue === 30) return;
      const newTemperature = degreeValue + 1;
      setTemperatureValue(newTemperature);
      if (newTemperature >= 15) {
      setTemperatureColor("hot");
      }
    };
  
    const lowTemperature = () => {
      if (degreeValue === 0) return;
  
      const newTemperature = degreeValue - 1;
       setTemperatureValue(newTemperature);
      if (newTemperature < 15) {
        setTemperatureColor("cold");
      }
    };
    return (
        <div className="app-container">
        <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {degreeValue}°C
      </div>
      </div>
    <div className="button-container">
        <button onClick={() => highTemperature ()}>+</button>
        <button onClick={() => lowTemperature ()}>-</button>
      </div>
      </div>
    );
}