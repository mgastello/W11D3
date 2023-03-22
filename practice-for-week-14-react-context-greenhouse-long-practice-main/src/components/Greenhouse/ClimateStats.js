import ClimateProvider, { ClimateContext, useClimate } from '../../context/ClimateContext';
import './ClimateStats.css';

function ClimateStats() {
  const { temperature, humidity } = useClimate()

  return (
    <ClimateProvider>
      <div className="climate-stats">
        <div className="temperature">
          Temperature {temperature}°F
        </div>
        <div className="humidity">
          Humidity {humidity}%
        </div>
      </div>
    </ClimateProvider>
  )
}

export default ClimateStats;