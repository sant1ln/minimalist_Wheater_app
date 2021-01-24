import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('Medellin')
  const [weather, setWeather] = useState({})
  const {main,name} = weather
  const {temp,temp_min,temp_max} = main
  const getWheter = async(e) =>{
    e.preventDefault()
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=34cfccc33831c3e9d00917c5ec7f80fa`
    const data = await fetch(baseURL)
    const response = await data.json()
    setWeather(response)
  }

  const handleInput = (e) =>{
    setInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>Weather app</h1>
      <form onSubmit={getWheter}>
        <input type="text" onChange={handleInput} value={input}/>
        <button type="submit">Buscar!</button>
      </form>
      <div>
        <h1>{name}</h1>
        <h2>Temperature: {temp}°C</h2> 
        <h4>Temp Min: {temp_min}°C</h4>
        <h4>Temp Max:{temp_max}°C</h4>
      </div>
    </div>
  );
}

export default App;
