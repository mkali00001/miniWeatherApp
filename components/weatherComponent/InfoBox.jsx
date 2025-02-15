import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'


const InfoBox = ({ Info }) => {
    let InitUrl = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let HOT_WEATHER = "https://media.istockphoto.com/id/1226623290/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures-stock-photo.jpg?s=2048x2048&w=is&k=20&c=JOnmXQRO0pOP40VIgYDgNW81CxL_P5RO5_aYcAwj9dE="
    let COLD_WEATHER = "https://media.istockphoto.com/id/997686460/photo/hiking-pots-on-the-fire-with-a-bright-flame-cooking-soup-in-field-conditions.jpg?s=2048x2048&w=is&k=20&c=pZHmZst-67edE2eDXAfPWuxYrNL6YUqvECCU3jvkXPE="
    let RAINY_WEATHER = "https://media.istockphoto.com/id/1429701799/photo/raindrops-on-asphalt-rain-rainy-weather-downpour.jpg?s=2048x2048&w=is&k=20&c=5-0cwKyftzKvHbxdXfJLyvV7Ijm0-lrB1DryXtJcpfg="
    return (
        <div className='infobox'>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.humidity > 80 ? RAINY_WEATHER : Info.temp > 15 ? HOT_WEATHER : COLD_WEATHER}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city} &nbsp;
                            {Info.humidity > 80 ? <ThunderstormIcon /> : Info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {Info.temp}&deg;C</p>
                            <p>Humidity = {Info.humidity}</p>
                            <p>Minnimum Temperature = {Info.tempMin}&deg;C</p>
                            <p>Maximun Temperature = {Info.tempMax}&deg;C</p>
                            <p>The weather is described as {Info.weather} and feels like  {Info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default InfoBox
