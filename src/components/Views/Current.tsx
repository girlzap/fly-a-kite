import { useAppData } from '../../providers'
import { useMessage, useDate } from '../../hooks';

import './Current.css'

const Current = () => {
	const [{ weather }] = useAppData()
	const getAdvice = useMessage()

	const { message, gustWarning } = getAdvice()

	const getTodaysDate = useDate()

	const scrollDown = (): void => {
		const appDiv = document?.getElementById('App')
		appDiv?.scroll({
			top: appDiv?.offsetHeight,
			behavior: "smooth"
		});
	}

	if (!weather) {
		return <div>Loading</div>
	}

	return (
		<div className="Current">

			<section>
				<div className="current-location">{weather.name}</div>
				<div className="current-date">{getTodaysDate()}</div>
			</section>

			<section>
				<div className="current-message">{message}</div>

				{gustWarning && <div className="gust-warning">{'*Watch out for high gusts up to ' + Math.round(weather.wind.gust) + 'mph'}</div>}
				<div className="current-wind-info">{Math.round(weather.wind.speed) + 'mph winds, ' + Math.round(weather.wind.gust) + 'mph gusts'}</div>
			</section>

			<section className="last">
				<div className="current-temp">{Math.round(weather.main.temp) + '°'}</div>
			</section>

			<div className="current-instruction" onClick={scrollDown}>Scroll down for forecast <br /><div className="scroll-icon">»</div></div>

		</div>
	);
};

export default Current;