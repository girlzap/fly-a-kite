import React, { useEffect, useState } from 'react';
import { useAppData } from '../providers'
import { useApi } from '../hooks'

import { Current, Forecast, UserInput } from './Views';

import './App.css';

const App = () => {
	const [{ coords, weather, forecast, location }] = useAppData()
	const getWeatherData = useApi()
	const [visualMode, setVisualMode] = useState('dark')

	useEffect(() => {
		if (location || coords) {
			getWeatherData('weather')
			getWeatherData('forecast')
		}
	}, [location, coords])

	const toggleViewMode = () => {
		const appElement = document.getElementById('App')
		if (appElement) {
			appElement.classList.toggle('light')
			appElement.classList.contains('light') ? setVisualMode('checked') : setVisualMode('')
		}
	}

	const resetLocation = () => {
		window.location.reload(true)
	}

	return (
		<div className="App" id="App">
			<button type="button" onClick={() => toggleViewMode()} className="toggle">
				<label className="switch" htmlFor="checkbox">
					<input type="checkbox" className={visualMode} />
					<span className={`slider round ${visualMode}`} />
				</label>
			</button>
			{(!weather || !forecast) && <UserInput />}
			{weather && forecast && (<button className="reset" onClick={resetLocation}>Reset Location</button>)}
			{weather && forecast && (<Current />)}
			{weather && forecast && (<Forecast />)}
		</div>
	);
}

export default App;
