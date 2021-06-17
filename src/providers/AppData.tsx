import React, {createContext, useContext, useReducer} from 'react'


//* Workflow: get user location, if not available set default to NY? load weather data and display app. there can be a "enter custom location" thing that the user can opt to use, which will retrieve the weather data by zip code instead of coords

interface AppDataState{
    location:string| null, 
    coords: any
}

interface AppDataAction{
    type:string
    value:any
}

const AppDataContext = createContext<any | null>({})

const AppDataReducer = (state: AppDataState, action: AppDataAction): AppDataState => {
    let newState = state
    switch (action.type){
        case 'SET_LOCATION':
            newState = { ...newState, location: action.value}
            break;
        case 'SET_COORDS':
            newState = { ...newState, coords: action.value }
            break
    }
    return newState
}

const AppDataProvider: React.FC = ({children}) => {
   

    const appDataInitState: AppDataState = {
        location: '48073', 
        coords: { lat: null, long: null}
    }

    const [state, dispatch] = useReducer(AppDataReducer, appDataInitState)

    return <AppDataContext.Provider value={[state, dispatch]}>{children}</AppDataContext.Provider>

    /////
}

const useAppData = (): [AppDataState, (action: AppDataAction) => {}] => useContext(AppDataContext)

export { AppDataProvider, useAppData,AppDataContext}