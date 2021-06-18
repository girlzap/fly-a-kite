import React, { useEffect } from 'react';

import { useAppData } from '../../providers'
import { useApi, } from '../../hooks'

const Forecast = () => {

	const [{ location, coords, weather, forecast }] = useAppData()
	const getWeatherData = useApi()

	useEffect(() => {
		// getWeatherData('forecast')
	}, [])


	return (
		<div>
			Forecast
			<p>{JSON.stringify(forecast)}</p>
		</div>
	);
};

export default Forecast;