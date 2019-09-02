import React, { Component } from 'react'
import Titles from './Components/Titles'
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = '1ecd49cee983ed6f493fc124aa66f1a0';

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return(
      <div>
        <Titles />
        <Form  getWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App
