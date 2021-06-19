const useMessage = (): Function => {
	const getAdvice = () => {
		//evaluate weather to return a specific message:

		// 5-25mph - Fly away!

		// 10-15mph is Perfect, go fly!
		// gusts above 25mph, Fly away, but be careful of gusts

		// light rain? * be careful of rain

		// moderate rain? best to stay inside (link to some kite flying videos?

		// lower then 5mph? Maybe with a glider
		// higher than 25? best to stay inside

		//below freezing temps? stay inside
		//between freezing and 65 - stay warm

		return 'Get custom message'
	}

	return getAdvice

}

export default useMessage