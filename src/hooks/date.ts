const useDate = () => {
	const getTodaysDate = () => {
		const today = new Date()

		const allMonths = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

		const day = today.getDate()
		const dayOfWeek = allDays[today.getDay()]
		const month = allMonths[today.getMonth()]
		const year = today.getFullYear()

		return dayOfWeek + ', ' + month + ' ' + day + ', ' + year
	}

	return getTodaysDate
}

export default useDate