import React from 'react'

const Weather = ({city, country, temperature, cord, humidity, pressure, wind, description, error}) => (  
    <div className='weather__info' >
      {
        city && country && <p className='weather__key'>Location: 
         <span className='weather__value'> {city}, {country}</span>
         </p>
      }
      {
        cord && <p className='weather__key'>Coordinates:
           <span className='weather__value'> Lat {cord[0]}deg, Lan {cord[1]}deg</span>
        </p>
      }
      {
        temperature && <p className='weather__key'>Temperature: 
         <span className='weather__value'> {temperature}°C</span>
         </p>
      }
      {
        humidity && <p className='weather__key'>Humidity: 
         <span className='weather__value'> {humidity}%</span>
         </p>
      }
      {
        pressure && <p className='weather__key'>Pressure: 
         <span className='weather__value'> {pressure} bar</span>
         </p>
      }
      {
        wind && <p className='weather__key'>Wind: 
         <span className='weather__value'> {wind} m/s</span>
         </p>
      }
      {
        description && <p className='weather__key'>Description: 
         <span className='weather__value'> {description}</span>
         </p>
      }
      {
        error && <p className='weather__key'>
         <span className='weather__error'> {error}</span>
         </p>
      }
    </div>
  )


export default Weather

