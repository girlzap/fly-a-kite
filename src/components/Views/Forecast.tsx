import React, { useEffect } from 'react';

import { useAppData } from '../../providers'

import './Forecast.css';

interface ForecastEntry {
	temp: number
	conditions: string
}

const Forecast = () => {

	const [{ forecast }] = useAppData()

	useEffect(() => {
		const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

		const forecastGrouping: any = {}

		forecast?.list?.forEach((data: any) => {
			let newdate = new Date(data.dt_txt)
			const dayName = (daysOfWeek[newdate.getDay()])

			if (forecastGrouping[dayName] === undefined) {
				forecastGrouping[dayName] = []
			}
		});

		forecast?.list?.forEach((data: any) => {

			let newdate = new Date(data.dt_txt)
			const dayName = (daysOfWeek[newdate.getDay()])

			forecastGrouping[dayName]?.push({
				temp: data.main.temp,
				conditions: data.weather[0].main
			})

		});
		console.log(forecastGrouping)
	}, [forecast])



	if (!forecast) {
		return <div>Loading...</div>
	}

	return (
		<div>
			Forecast

			{forecast?.list?.map((data: any) => {

				return (
					<div className="item" key={data.dt}>
						<div className="date">{data.dt_txt}</div>
						<div className="temp">{Math.round(data.main.temp)}°F</div>
						<img alt="" src={"http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} />
					</div>
				)
			})}
		</div>
	);
};

export default Forecast;