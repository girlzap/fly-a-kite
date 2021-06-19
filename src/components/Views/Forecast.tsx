import React, { useEffect } from 'react';

import { useAppData } from '../../providers'
import { useApi, } from '../../hooks'
import './Forecast.css';
const Forecast = () => {

	const [{ location, coords, weather, forecast }] = useAppData()
	const getWeatherData = useApi()

	useEffect(() => {


		let days = {
			"Sunday": [],
			"Monday": [],
			"Tuesday": [],
			"Wednesday": [],
			"Thursday": [],
			"Friday": [],
			"Saturday": [],
		}


		forecast.list.forEach((data: any) => {

			let date = new Date(data.dt)
			console.log(date.getFullYear())

		});

	}, [])


	return (
		<div>
			Forecast

			{forecast.list.map((data: any) => {

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