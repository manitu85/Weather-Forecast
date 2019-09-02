import React, { Component } from 'react'

export class Form extends Component {
  render() {
    // const { getWeather } = this.props;
    // console.log(getWeather)
    return (
      <form onSubmit={this.props.getWeather} >
        <input type='text' name='city' placeholder='City...' />
        <input type='text' name='country' placeholder='Country...' />
        <button>Submit</button>
      </form>
      
    )
  }
}

export default Form

