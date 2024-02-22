import React from 'react';
import styles from './CurrentWeatherDescription.module.css'

function CurrentWeatherDescription({ data }) {
	// console.log(data,'from desccccc......')
	let temp = require('../../assets/images/thermometer.png')
	let pressure = require("../../assets/images/pressure (1).png")
	let humidity = require("../../assets/images/humidity.png")
	let wind = require("../../assets/images/wind (1).png")


	return (
		<div className={styles.currentWidgetDescription}>
			<div className={styles.line}>
				<div className={styles.icon}>
				{/* {`icons/${data.weather[0].icon}.png`}  */}
					<img src={temp} alt="Temperature" className={styles.pic} />
				</div>
				<div className={styles.name}>Temperature</div>
				<div className={styles.text}>{Math.round(data.main.temp)}° - feels like {Math.round(data.main.feels_like)}°</div>
			</div>
			<div className={styles.line}>
				<div className={styles.icon}>
					<img src={pressure} alt="Pressure" className={styles.pic} />
				</div>
				<div className={styles.name}>Pressure</div>
				<div className={styles.text}>{data.main.pressure} mm of mercury column</div>
			</div>
			<div className={styles.line}>
				<div className={styles.icon}>
					<img src={humidity} alt="Humidity" className={styles.pic} />
				</div>
				<div className={styles.name}>Humidity</div>
				<div className={styles.text}>{data.main.humidity}%</div>
			</div>
			<div className={styles.line}>
				<div className={styles.icon}>
					<img src={wind} alt="Wind" className={styles.pic} />
				</div>
				<div className={styles.name}>Wind</div>
				<div className={styles.text}>{data.wind.speed} m/s</div>
			</div>
		</div>
	)
}


export default CurrentWeatherDescription