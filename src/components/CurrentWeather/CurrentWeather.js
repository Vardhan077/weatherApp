import React from 'react';
import styles from './CurrentWeather.module.css';

export default function CurrentWeather({ data }) {
	console.log(data,'is data',data.weather[0].icon)
	let x;
	if (data.weather[0].main === 'Clouds') {
        x = require('../../assets/images/clouds.png');
    } else if (data.weather[0].main === 'Drizzle') {
        x = require('../../assets/images/drizzle.png');
    } else if (data.weather[0].main === 'Humidity') {
        x = require('../../assets/images/humidity.png');
    } else if (data.weather[0].main === 'Mist') {
        x = require('../../assets/images/mist.png');
    } else if (data.weather[0].main === 'Rain') {
        x = require('../../assets/images/rain.png');
    } else if (data.weather[0].main === 'Snow') {
        x = require('../../assets/images/snow.png');
    } else if (data.weather[0].main === 'Wind') {
        x = require('../../assets/images/wind.png');
    } else if (data.weather[0].main === 'Clear') {
        x = require('../../assets/images/clear.png');
    }else if (data.weather[0].main === 'Haze') {
        x = require('../../assets/images/haze.png');
    }
	console.log(data.weather[0].main)
	console.log(x)

	return (
		<div className={styles.currentWidget}>
			<div className={styles.wrapperTop}>
				<div className={styles.infoLeft}>
					<div className={styles.temp}>{Math.round(data.main.temp)}°</div>
					<div className={styles.day}>Today</div>
				</div>
				<div className={styles.infoRight}>
					<img src={x} alt="Image" className={styles.pic} />
				</div>
			</div>
			<div className={styles.wrapperBottom}>
				<div className={styles.city}>City: {data.name}</div>
			</div>
		</div>
	)
}