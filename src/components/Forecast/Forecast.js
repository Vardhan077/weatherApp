import React from 'react';
import styles from './Forecast.module.css';

export default function Forecast({ data, days }) {
	const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	const dayInWeek = new Date().getDay();

	const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek));

	const x = () =>{
		let one = require("../../assets/images/cloud.png")
		let two = require("../../assets/images/sun.png")
		let three = require("../../assets/images/clouds.png")
		let a = [one,two,three]
		return (
			a[Math.floor(a.length * Math.random())]
		)
	}
	
	return (
		<div className={styles.widgetForecast} style={{ marginTop: '50px' }}>
			{data.list.slice(0, days).map((item, id) => (
				<div className={styles.widgetItem} key={id}>
					<div className={styles.day}>{forecastDays[id]}</div>
					<div className={styles.icon}>
						<img src={x()} alt="Icon" />
					</div>
					<div className={styles.max}>+{Math.round(item.main.temp_max)}</div>
					<div className={styles.min}>+{Math.round(item.main.temp_min)}</div>
					<div className={styles.description}>{item.weather[0].description}</div>
				</div>
			))}
		</div>
	)
}
