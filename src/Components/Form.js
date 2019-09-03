import React from 'react'

const Form = ({getWeather}) => (
  <form onSubmit={getWeather} >
    {/* <h1 className='mb-5'>Choose your forecast destination</h1> */}
    <input type='text' name='city' placeholder='City...' />
    <input type='text' name='country' placeholder='Country...' />
    <button>Submit</button>
  </form>
)

export default Form

