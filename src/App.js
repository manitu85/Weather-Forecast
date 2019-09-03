import React, { Component } from 'react'
import Titles from './Components/Titles'
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = '1ecd49cee983ed6f493fc124aa66f1a0';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    cord: undefined,
    temperature: undefined,
    humidity: undefined,
    pressure: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    

    if (city && country) {
      console.log(data);

      this.setState({
        city: data.name,
        country: data.sys.country,
        cord: [data.coord.lat, data.coord.lon],
        temperature: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        description: data.weather[0].main,
        wind: data.wind.speed,
        error: ''
      })
    } else {
        this.setState({
          city: undefined,
          country: undefined,
          cord: undefined,
          temperature: undefined,
          humidity: undefined,
          pressure: undefined,
          description: undefined,
          wind: undefined,
          error: 'Please enter the values'
        })
    }
  }

  render() {
    return(
      <div>
        <Titles />
        <Form  getWeather={this.getWeather} />
        <Weather 
          city={this.state.city}
          country={this.state.country}
          cord={this.state.cord}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          wind={this.state.wind}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App
