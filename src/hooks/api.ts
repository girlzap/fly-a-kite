import { useAppData } from '../providers'
const configData = require('../config.json')
const offlineData = require('../assets/offlinedata.json')

const useApi = (): any => {
	const [{ location, coords, offline }, appDispatch] = useAppData()

	const getWeatherData = (type: string): void => {
		// ['weather', 'forecast']
		console.log("Fetching API, offline status: " + offline)
		let locationIndicator = coords ? 'lat=' + coords.lat + '&lon=' + coords.long : 'zip=' + location

		let apiUrl = 'https://api.openweathermap.org/data/2.5/' + type + '?' + locationIndicator + '&units=imperial&appid=' + configData.apiKey
		if (offline) {
			if (type === 'weather') {
				appDispatch({
					type: 'SET_WEATHER',
					value: offlineData.weather
				})
			} else {
				appDispatch({
					type: 'SET_FORECAST',
					value: offlineData.forecast
				})
			}
		} else {
			fetch(apiUrl)
				.then((response) => {
					return response.json()
						.then((data) => {
							if (type === 'weather') {
								appDispatch({
									type: 'SET_WEATHER',
									value: data
								})
							} else {
								appDispatch({
									type: 'SET_FORECAST',
									value: data
								})
							}

						})

				})
				.catch((error) => {
					console.error(error)
					appDispatch({
						type: 'SET_WEATHER',
						value: offlineData[type]
					})
				})
		}





	}


	return getWeatherData
}

export default useApi