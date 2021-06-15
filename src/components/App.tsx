import React from 'react';
import './App.css';

import { useWeatherData } from '../providers'

function App() {

  const [{location}] = useWeatherData()
  return (
    <div className="App">
      <header className="App-header">
        Header
        {JSON.stringify(location)}
      </header>
    </div>
  );
}

export default App;
