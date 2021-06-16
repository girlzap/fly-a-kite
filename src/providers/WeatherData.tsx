import React, {createContext, useContext, useEffect, useReducer} from 'react'
import useLocation from '../hooks'

//* Workflow: get user location, if not available set default to NY? load weather data and display app. there can be a "enter custom location" thing that the user can opt to use, which will retrieve the weather data by zip code instead of coords

//TODO: create interface for below type
const defaultWeatherData: any = {
   location: '48073',
   weatherData: {}
}

interface WeatherDataState{
    location:string| null
}

interface WeatherDataAction{
    type:string
    value:any
}

const WeatherDataContext = createContext<any | null>({})

const WeatherDataReducer = (state: WeatherDataState, action: WeatherDataAction): WeatherDataState => {
    let newState = state
    switch (action.type){
        case 'SET_LOCATION':
            newState = { ...newState, location: action.value}
    }
    return newState
}

const WeatherDataProvider: React.FC = ({children}) => {
    const userLocation = useLocation()
    const weatherDataInitState: WeatherDataState = {
        location: null
    }

    const [state, dispatch] = useReducer(WeatherDataReducer, weatherDataInitState)

    useEffect(()=>{
        dispatch({
            type: 'SET_LOCATION',
            value: userLocation()
        })
    }, [])

    

    console.log(userLocation())

    return <WeatherDataContext.Provider value={[state, dispatch]}>{children}</WeatherDataContext.Provider>

    /////
}

const useWeatherData = (): [WeatherDataState, (action: WeatherDataAction) => {}] => useContext(WeatherDataContext)

export { WeatherDataProvider, useWeatherData, WeatherDataContext}