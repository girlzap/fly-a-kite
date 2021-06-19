import { useAppData } from '../../providers'
import { useMessage } from '../../hooks';

import './Current.css'

const Current = () => {
	const [{ location, coords, weather }] = useAppData()
	const getAdvice = useMessage()
	const todaysDate = new Date()
	//TODO: show a better looking date, 'Saturday, June 21, 2020'
	console.log(weather)

	if (!weather) {
		return <div>Loading</div>
	}
	return (
		<div className="Current">

			<section>
				<div className="location">{weather.name}</div>
				<div className="date">{todaysDate.toDateString()}</div>
			</section>

			<section>
				<div className="message">{getAdvice()}</div>
				<div className="wind-info">{Math.round(weather.wind.speed) + 'mph winds, ' + Math.round(weather.wind.gust) + 'mph gusts'}</div>
			</section>

			<section className="last">
				<div className="temp medium">{Math.round(weather.main.temp) + '°'}</div>
				{weather?.weather && <div className="conditions-block">

					<img src={'http://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'} alt="weather icon" />
					<div className="conditions">{weather.weather[0].main}</div>
				</div>}
			</section>

			<div className="instruction">Scroll down for forecast</div>

		</div>
	);
};

export default Current;