import { useAppData } from '../providers'
const configData = require('../config.json')
const offlineData = require('../assets/offlinedata.json')

const useApi = (): Function => {
	const [{ location, coords }, appDispatch] = useAppData()

	const getWeatherData = (type: string): void => {
		// ['weather', 'forecast']

		let locationIndicator = coords ? 'lat=' + coords.lat + '&lon=' + coords.long : 'zip=' + location

		let apiUrl = 'http://api.openweathermap.org/data/2.5/' + type + '?' + locationIndicator + '&units=imperial&appid=' + configData.apiKey

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


		// fetch(apiUrl)
		// 	.then((response) => {
		// 		return response.json()
		// 			.then((data) => {
		// 				console.log(data)
		// 				// return data

		// 				appDispatch({
		// 					type: 'SET_WEATHER',
		// 					value: data
		// 				})
		// 			})

		// 	})
		// 	.catch((error) => {
		// 		console.error(error)
		// 		appDispatch({
		// 			type: 'SET_WEATHER',
		// 			value: offlineData[type]
		// 		})
		// 	})

	}


	return getWeatherData
}

export default useApi