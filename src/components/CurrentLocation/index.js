import React, { useState, useEffect } from "react";
import { WEATHER_API_URL } from "../../api/api";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";
import Tabs from "../UI/Tabs/Tabs";
import CurrentWeatherDescription from "../CurrentWeatherDescription/CurrentWeatherDescription";
import './index.css'

const CurrentLocation = ({ setLocationData }) => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
    }, []);

    useEffect(() => {
        if (lat !== '' && lon !== '') {
            const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=a1f08397a1731e72c1302c36f974836d&units=metric`);
            const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=a1f08397a1731e72c1302c36f974836d&units=metric`);

            Promise.all([currentWeatherFetch, forecastWeatherFetch])
                .then(async (response) => {
                    const weatherResponse = await response[0].json();
                    const forecastResponse = await response[1].json();

                    setCurrentWeather(weatherResponse);
                    setForecastWeather(forecastResponse);
                    setLocationData({ currentWeather: weatherResponse, forecastWeather: forecastResponse });
                })
                .catch((err) => console.log(err));
        }
    }, [lat, lon, setLocationData]);
    console.log(currentWeather,'is current weather')
    console.log(forecastWeather,'is forreeeeeeeeeeeee')

    return (
        <div className="Container">
            <div className="curContainer">
                {currentWeather && <CurrentWeather data={currentWeather} className = 'current' />}
                {currentWeather && <CurrentWeatherDescription data={currentWeather} className = 'currentDesc'  />}
            </div>
            <div>
            {forecastWeather && <Tabs data={forecastWeather} />}
                {/* <p>nsbknk</p> */}
            </div>
            
        </div>
    );
}

export default CurrentLocation;















// import React, { useState, useEffect } from "react";
// import { WEATHER_API_URL } from "../../api/api";
// import CurrentWeather from '../CurrentWeather'; // Import the CurrentWeather component

// const CurrentLocation = ({ setLocationData }) => {
//     const [lat, setLat] = useState('');
//     const [lon, setLon] = useState('');
//     const [currentWeather, setCurrentWeather] = useState(null);
//     const [forecastWeather, setForecastWeather] = useState(null);

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             setLat(position.coords.latitude);
//             setLon(position.coords.longitude);
//         });
//     }, []);

//     useEffect(() => {
//         if (lat !== '' && lon !== '') {
//             const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=a1f08397a1731e72c1302c36f974836d&units=metric`);
//             const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=a1f08397a1731e72c1302c36f974836d&units=metric`);

//             Promise.all([currentWeatherFetch, forecastWeatherFetch])
//                 .then(async (response) => {
//                     const weatherResponse = await response[0].json();
//                     const forecastResponse = await response[1].json();

//                     setCurrentWeather(weatherResponse);
//                     setForecastWeather(forecastResponse);
//                     setLocationData({ currentWeather: weatherResponse, forecastWeather: forecastResponse });
//                 })
//                 .catch((err) => console.log(err));
//         }
//     }, [lat, lon, setLocationData]);

//     return (
//         <div>
//             {currentWeather && <CurrentWeather data={currentWeather} />}
//         </div>
//     );
// }

// export default CurrentLocation;
