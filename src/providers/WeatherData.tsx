import React, {createContext, useContext, useEffect, useReducer} from 'react'

const defaultWeatherData: any = {
   location: '48073'
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
    const weatherDataInitState: WeatherDataState = {
        location: null
    }

    const [state, dispatch] = useReducer(WeatherDataReducer, weatherDataInitState)

    useEffect(()=>{
        dispatch({
            type: 'SET_LOCATION',
            value: '48073'
        })
    }, [])

    return <WeatherDataContext.Provider value={[state, dispatch]}>{children}</WeatherDataContext.Provider>

    /////
}

const useWeatherData = (): [WeatherDataState, (action: WeatherDataAction) => {}] => useContext(WeatherDataContext)

export { WeatherDataProvider, useWeatherData, WeatherDataContext}