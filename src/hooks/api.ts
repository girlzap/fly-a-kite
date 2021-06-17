import { useAppData } from '../providers'

const useApi = (): Function => {
    const [{ location, coords }, appDispatch] = useAppData()
    
    const key = "e84d91c5e881bd2d8192021e937f5fbf"
    const getData = (type:string) =>{

        let weather:any
        let forecast:any

        if (type === "coords") {

            weather = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.lat + '&lon=' + coords.long + '&units=imperial&appid=' + key

            forecast = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + coords.lat + '&lon=' + coords.long + '&units=imperial&appid=' + key

        } else if (type === "zip") {
            weather = 'http://api.openweathermap.org/data/2.5/weather?zip=' + location + ',us&units=imperial&appid=' + key

            forecast = 'http://api.openweathermap.org/data/2.5/weather?zip=' + location + ',us&units=imperial&appid=' + key
        } else {
            console.log("Call type not specified")
        }


        fetch(weather)
            .then((response) => {
                // debugger
                if (response.status === 200) {
                    return response.json()
                        .then((data) => {
                            // debugger
                            console.log(data)
                            // setLoaded(true);
                            // setWeatherData(data);
                            // setErrorMessage(null)
                        })

                } else {
                    // setErrorMessage("This zipcode is invalid.")
                }

            })

        fetch(forecast)
            .then((response) => {
                return response.json()
                    .then((data) => {
                        // setLoaded(true);
                        // setForecastData(data);
                    })
            })


        return 'data'
    }

    return getData
}

export default useApi