import { useAppData } from '../providers'

const useGeolocation = (): Function => {
	const [, appDispatch] = useAppData()


	const getCoordinates = () => {
		console.log('geo')
		const setPosition = (position: any) => {

			appDispatch({
				type: 'SET_COORDS',
				value: { lat: (position.coords.latitude), long: (position.coords.longitude) }
			})
		}

		navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
			// ['granted', 'prompt', 'denied']

			if (result.state === 'granted') {
				navigator.geolocation.getCurrentPosition(setPosition)
			}
		});

	}

	return getCoordinates
}

export default useGeolocation