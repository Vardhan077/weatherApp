import { useState } from "react";
import { WEATHER_API_URL } from "../api/api";

export const useWeatherData = () => {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecastWeather, setForecastWeather] = useState(null);

	const handleOnSearchChange = (searchData) => {
		const [latitude, longitude] = searchData.value.split(' ');

		const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=a1f08397a1731e72c1302c36f974836d&units=metric`)
		const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=a1f08397a1731e72c1302c36f974836d&units=metric`)

		// console.log(currentWeather,forecastWeather)
		Promise.all([currentWeatherFetch, forecastWeatherFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forecastResponse = await response[1].json();

				setCurrentWeather({ city: searchData.label, ...weatherResponse });
				setForecastWeather({ city: searchData.label, ...forecastResponse });
			})
			.catch((err) => console.log(err));
	}

	return [currentWeather, forecastWeather, handleOnSearchChange]
}