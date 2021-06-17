import React, { useEffect } from 'react'

import { useAppData } from '../../providers'

import { useApi, } from '../../hooks'

const Current = () => {
	const [{ location, coords, weather }] = useAppData()



	return (
		<div>
			Current
			<p>Location: {location}</p>
			<p>Coords LAT:  {coords.lat}</p>
			<p>Coords LONG:  {coords.long}</p>
			<p>{JSON.stringify(weather)}</p>

			{/* {weather.weather && <img src={'http://openweathermap.org/img/wn/' + weather.weather[0]?.icon + '@2x.png'} alt="weather icon" />} */}

		</div>
	);
};

export default Current;