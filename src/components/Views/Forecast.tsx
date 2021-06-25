import React, { useEffect, useState } from 'react';

import { useAppData } from '../../providers'

import './Forecast.css';

interface ForecastEntry {
	temp: number
	conditions: string
}

const Forecast = () => {

	const [{ forecast, weather }] = useAppData()
	const todaysDate = new Date()
	const [forecastData, setForecastData] = useState<any>({})

	//TODO: move the below into a hook?
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
		setForecastData(forecastGrouping)
	}, [forecast])

	const getTemp = (dayData: ForecastEntry[], type: string) => {
		const temps: Array<number> = []
		dayData.forEach((entry: any) => {
			temps.push(Math.round(entry.temp))
		})
		const max = temps.reduce(function (a, b) {
			if (type === 'high') {
				return Math.max(a, b);
			}

			return Math.min(a, b);

		});

		return max
	}

	if (!forecast) {
		return <div>Loading...</div>
	}

	return (
		<div className="Forecast">

			<section>
				<div className="current-location">{weather.name}</div>
				<div className="current-date">{todaysDate.toDateString()}</div>
			</section>
			<section>
				{weather?.weather && <div className="forecast-conditions-block">

					<img src={'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} alt="weather icon" />
					<div className="forecast-conditions">{weather.weather[0].main}</div>

				</div>}
				<div className="forecast-temp">
					<div className="temp-high">{Math.round(weather.main.temp_max) + '°'}</div>
					<div className="temp-low">{Math.round(weather.main.temp_min) + '°'}</div>
				</div>
			</section>
			<section>
				<div className="forecast-days-block">
					{Object.keys(forecastData).map((day: any) => (
						<div className="day-block" key={day}>
							<div>{day}</div>
							<div className="forecast-day high">{getTemp(forecastData[day], 'high') + '°'}</div>
							<div className="forecast-day low">{getTemp(forecastData[day], 'low') + '°'}</div>
						</div>
					))}


				</div>
			</section>


		</div>
	);
};

export default Forecast;