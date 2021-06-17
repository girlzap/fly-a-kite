import React, { useEffect } from 'react';
import './App.css';

import { useAppData } from '../providers'

import { useApi, useGeolocation } from '../hooks'

import './particle.scss'

const App = () => {

	const [{ location, coords, weather }] = useAppData()
	const getWeatherData = useApi()
	const getCoordinates = useGeolocation()

	useEffect(() => {
		getCoordinates()
		//TODO: call in the view when that is set up, change to forecast for that view
		getWeatherData('weather')

	}, [])

	return (
		<div className="App">
			<div className="animation-wrapper">
				<div className="particle particle-1"></div>
				<div className="particle particle-2"></div>
				{/* <div className="particle particle-3"></div>
				<div className="particle particle-4"></div> */}
			</div>
			<header className="App-header">

				<p>Location: {location}</p>
				<p>Coords LAT:  {coords.lat}</p>
				<p>Coords LONG:  {coords.long}</p>
				<p>{JSON.stringify(weather.name)}</p>
				{/* <img src={'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} alt="weather icon" /> */}
			</header>
		</div>
	);
}

export default App;
