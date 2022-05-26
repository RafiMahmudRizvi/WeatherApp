import React from 'react'

const Footer = ({data}) => {
  return (
    <>
    <div className="footer">
              <div className="feels-like">
                <span className="material-icons-sharp">thermostat</span>
                <div>
                  <h3>{Math.round(data.feels_like)}°C</h3>
                  <p>Feels like</p>
                </div>
              </div>
              <div className="line"></div>
              <div className="humidity">
                <span className="material-icons-sharp">water_drop</span>
                <div>
                  <h3>{Math.round(data.humidity)}%</h3>
                  <p>Humidity</p>
                </div>
              </div>
          </div>
      

    </>
  )
}

export default Footer