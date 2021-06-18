import React, { useEffect } from 'react';
import './App.css';

import { useAppData } from '../providers'

import { useApi, useGeolocation } from '../hooks'
import { Current, Forecast } from './Views';

const App = () => {
	const [{ location, coords, weather, view, forecast }, appDispatch] = useAppData()
	const getWeatherData = useApi()
	const getCoordinates = useGeolocation()



	useEffect(() => {
		getCoordinates()
		getWeatherData('weather')
		getWeatherData('forecast')

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

	const changeView = (targetView: string) => {
		appDispatch({
			type: 'SET_VIEW',
			value: targetView
		})
	}

	if (weather === {}) {
		return <div>Loading...</div>
	}


	return (
		<div className="App">
			<button onClick={() => changeView('current')}>Current</button>
			<button onClick={() => changeView('forecast')}>Forecast</button>
			<div className="view-finder">
				{getView()}
			</div>
		</div>
	);
}

export default App;
