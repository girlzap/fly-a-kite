import React, { useEffect } from 'react';
import './App.css';

import { useAppData } from '../providers'

import { useApi, useGeolocation } from '../hooks'
import { Current, Forecast } from './Views';

const App = () => {
	const [{ location, coords, weather, view }, appDispatch] = useAppData()
	const getWeatherData = useApi()
	const getCoordinates = useGeolocation()



	useEffect(() => {
		getCoordinates()
		//TODO: call in the view when that is set up, change to forecast for that view
		getWeatherData('weather')
		// getWeatherData('forecast')

	}, [])

	const getView = () => {
		switch (view) {
			case 'current':
				return <Current />
			case 'forecast':
				return <Forecast />

			default:
				break;
		}
	}

	const changeView = () => {
		appDispatch({
			type: 'SET_VIEW',
			value: 'forecast'
		})
	}

	if (weather === {}) {
		return <div>Loading...</div>
	}

	console.log(weather)

	return (
		<div className="App">
			<button onClick={() => changeView()}>Current</button>
			<div className="view-finder">
				{getView()}
			</div>
		</div>
	);
}

export default App;
