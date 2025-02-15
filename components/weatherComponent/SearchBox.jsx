import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'

const SearchBox = ({updateInfo}) => {

  let [city, setCity] = useState("");
  let [error, setError] = useState(false)
  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = "061108a80ae2815262427f500b54460e"

  let getWeatherInfo = async ()=>{
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jsonResponse = await response.json()
    let weatherData = {
      city:city,
      temp:jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelsLike:jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description
    }
    console.log(weatherData)
    return weatherData;
    }catch(err) {
      throw err
    }
  }

  let handleChange = (event) => {
    setCity(event.target.value)
  }

  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
    console.log(city)
    setCity("")
    let newInfo = await getWeatherInfo()
    updateInfo(newInfo)
    setError(false)
    }catch(err){
      setError(true)
    }
  }

  return (
    <div className='SearchBox'>
      <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleChange} /><br /><br />
        <Button variant="contained" type='submit'>
          Search
        </Button><br />
        {
          error && <p style={{color:'red'}}>No Such City in Our API</p>
        }
      </form>
    </div>
  )
}

export default SearchBox
