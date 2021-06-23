import { useAppData } from '../../providers'
import { useMessage } from '../../hooks';

import './Current.css'

const Current = () => {
	const [{ location, coords, weather }] = useAppData()
	const getAdvice = useMessage()
	const todaysDate = new Date()
	//TODO: show a better looking date, 'Saturday, June 21, 2020'

	if (!weather) {
		return <div>Loading</div>
	}

	return (
		<div className="Current">

			<section>
				<div className="current-location">{weather.name}</div>
				<div className="current-date">{todaysDate.toDateString()}</div>
			</section>

			<section>
				<div className="current-message">{getAdvice()}</div>
				<div className="current-wind-info">{Math.round(weather.wind.speed) + 'mph winds, ' + Math.round(weather.wind.gust) + 'mph gusts'}</div>
			</section>

			<section className="last">
				<div className="current-temp">{Math.round(weather.main.temp) + '°'}</div>
			</section>

			<div className="current-instruction">Scroll down for forecast</div>

		</div>
	);
};

export default Current;