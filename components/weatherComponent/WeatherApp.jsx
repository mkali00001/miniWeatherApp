import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

const WeatherApp = () => {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Lucknow",
        temp: 29,
        tempMin: 29,
        tempMax: 29,
        humidity: 36,
        feelsLike: 32,
        weather: "haze"
    })
    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo)
    }
  return (
    <div style={{textAlign:'center', marginTop:'0'}}>
        <h1>Mini Weather App</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox  Info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
