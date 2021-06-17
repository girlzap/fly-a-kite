import React, { useEffect, useState } from 'react';
import './App.css';

import { useAppData } from '../providers'

import { useApi } from '../hooks'

function App() {

  const [{ location, coords }, appDispatch] = useAppData()
  const getData = useApi()

  const [lat, setLat] = useState<number | null>(null)
  const [long, setLong] = useState<number | null>(null)

  const setPosition = (position: any) => {

    setLat(Math.round(position.coords.latitude))
    setLong(Math.round(position.coords.longitude))

  }

  const userLocation = () => {

    navigator.geolocation ? navigator.geolocation.getCurrentPosition(setPosition) : console.log('geolocation blocked')
  }
  getData('zip')
  useEffect(()=>{
    appDispatch({
      type: 'SET_COORDS',
      value: { lat, long }
    })
    console.log("setting coords from browser")
  }, [lat, long, appDispatch])

  userLocation()

  //* if coords, use those for api call, if those dont exist use default zip code

  
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Location: {location}</p>
       <p>Coords:  {JSON.stringify(coords)}</p>
       
      </header>
    </div>
  );
}

export default App;
