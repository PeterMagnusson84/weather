import React, { useState } from 'react'

const Weather = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <div>Weather infromation</div>
      <div>
        <input type='text' placeholder='Search'/>
        <img src="" alt="" />
      </div>
      <div>
      <button>Search</button>
      </div>
    </div>
  )
}

export default Weather