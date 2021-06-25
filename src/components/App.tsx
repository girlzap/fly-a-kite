import React, { useEffect } from 'react';
import './App.css';

import { useAppData } from '../providers'

import { useApi, useGeolocation } from '../hooks'
import { Current, Forecast } from './Views';

const App = () => {
	const [{ coords, weather, forecast }] = useAppData()
	const getWeatherData = useApi()
	const getCoordinates = useGeolocation()

	useEffect(() => {
		getCoordinates()
	}, [])

	useEffect(() => {

		getWeatherData('weather')
		getWeatherData('forecast')

	}, [coords])

	if (!weather || !forecast) {
		return <div>Loading...</div>
	}

	return (
		<div className="App" id="App">
			<Current />
			<Forecast />
		</div>
	);
}

export default App;
