import React, { useEffect } from 'react'

import { useAppData } from '../../providers'

import { useApi, } from '../../hooks'

const Current = () => {
	const [{ location, coords, weather }] = useAppData()



	return (
		<div>

			<div>The current temperature for {weather?.name} is {Math.round(weather?.main?.temp)}°F
			</div>
			{weather.weather && <img src={'http://openweathermap.org/img/wn/' + weather.weather[0]?.icon + '@2x.png'} alt="weather icon" />}

		</div>
	);
};

export default Current;