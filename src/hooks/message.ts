import { useAppData } from '../providers'

const useMessage = (): Function => {
	const [{ weather }] = useAppData()
	const getAdvice = () => {
		const { temp } = weather.main
		const { description } = weather.weather[0]
		const wind = weather.wind.speed

		let message = ''
		let gustWarning = false

		if (weather.wind.gust > 25) {
			gustWarning = true
		}

		// evaluate wind
		if (wind >= 10 && wind <= 15) {
			message = 'Perfect, go fly!'
		}

		if ((wind >= 5 && wind < 10) || (wind > 15 && wind <= 25)) {
			message = 'Fly away!'
		}

		if (wind < 5) {
			message = 'Maybe with a glider...'
		}

		if (wind > 25) {
			message = 'Too windy today'
			gustWarning = false
		}

		//evaluate conditions
		if (description.includes('drizzle')) {
			message = 'Bring a rain jacket'
		}

		if (description.includes('rain')) {
			message = 'Rain today, maybe tomorrow'
			gustWarning = false
		}

		if (description.includes('thunderstorm')) {
			message = 'Best to stay inside'
			gustWarning = false
		}

		//evaluate temp
		if (temp > 32 && temp <= 65) {
			message = 'Bring a jacket to stay warm!'
		}

		if (temp < 32) {
			message = 'Too chilly, stay warm inside!'
			gustWarning = false
		}

		return { message, gustWarning }
	}

	return getAdvice

}

export default useMessage