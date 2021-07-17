import React, { useState } from 'react';
import { useAppData } from '../../providers'
import { useGeolocation } from '../../hooks'

import './UserInput.css'

const UserInput = () => {
	const [, appDispatch] = useAppData()
	const [zipCode, setZipCode] = useState('')
	const getCoordinates = useGeolocation()

	const setLocation = (): void => {
		if (/^\d{5}(-\d{4})?$/.test(zipCode)) {
			appDispatch({
				type: 'SET_LOCATION',
				value: zipCode
			})
		}
		//TODO: else show warning or message
	}

	const useLocation = () => {
		//TODO: check permissions on nav
		getCoordinates()
	}

	return (
		<div className="UserInput">
			<div className="input-header">Can I fly a kite today?</div>
			<div className="input-message">Enter a US zip code</div>
			<div className="input-container">
				<input onChange={(e) => setZipCode(e.target.value)} onKeyDown={(e) => {
					if (e.which === 13) {
						setLocation()
					}
				}} aria-label="Input a US zip code" />
				<button onClick={setLocation} aria-label="Set zip code as location">→</button>
			</div>
			<div>or</div>
			<button onClick={useLocation} aria-label="Use browsers geolocation coordinates, will not work accurately with a VPN or if you do not allow access">🛰️ Use my location</button>
		</div>
	);
};

export default UserInput;