import React, { useEffect, useState } from 'react';
import './App.css';

import { useAppData } from '../providers'

import { useApi, useGeolocation } from '../hooks'
import { Current, Forecast } from './Views';

const App = () => {
	const [{ coords, weather, forecast }] = useAppData()
	const getWeatherData = useApi()
	const getCoordinates = useGeolocation()
	const [visualMode, setVisualMode] = useState('dark')

	useEffect(() => {
		getCoordinates()
	}, [])

	useEffect(() => {

		getWeatherData('weather')
		getWeatherData('forecast')

	}, [coords])

	const toggleViewMode = () => {
		const appElement = document.getElementById('App')
		if (appElement) {
			appElement.classList.toggle('light')
			appElement.classList.contains('light') ? setVisualMode('checked') : setVisualMode('')
		}
	}

	if (!weather || !forecast) {
		return <div>Loading...</div>
	}

	return (
		<div className="App" id="App">
			<button type="button" onClick={() => toggleViewMode()} className="toggle">
				<label className="switch" htmlFor="checkbox">
					<input type="checkbox" className={visualMode} />
					<span className={`slider round ${visualMode}`} />
				</label>
			</button>
			<Current />
			<Forecast />
		</div>
	);
}

export default App;
