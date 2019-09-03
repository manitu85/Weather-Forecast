import React from 'react'

const Weather = ({city, country, temperature, cord, humidity, pressure, wind, description, error}) => (  
    <div>
      {city && country && <p>Location: {city}, {country}</p>}
      {temperature && <p>Temperature: {temperature}C</p>}
      {cord && <p>Coordinates: Lat {cord[0]}deg, Lan {cord[1]}deg</p>}
      {humidity && <p>Humidity: {humidity}%</p>}
      {pressure && <p>Pressure: {pressure} bar</p>}
      {wind && <p>Wind: {wind} m/s</p>}
      {description && <p>Description: {description}</p>}
      {error && <p>{error}</p>}
    </div>
  )


export default Weather

