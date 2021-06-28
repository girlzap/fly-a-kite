# Fly a Kite Weather Application

Weather application that uses location coordinates to display local weather data for current conditions and a 5 day forecast. 

The application also provides advice for the sport of kite flying. This advice changes depending on the current weather conditions, wind speeds, and temperature. 

-------

### Contents
* [Components](#components)
* [Hooks](#hooks)
* [Providers](#providers)
* [UI Notes](#ui)
* [Create React Boilerplate Notes](#cra)


-------------


## Components
<a id="components"> </a>

### App
Base application components. 
* Retrieves the browsers geolocation via a custom hook and then sets the response coordinates for the weather API calls. 
* Sets the weather and forecast data once the weather API response has been returned. This reduces the number of outside API calls the application makes. 

### Views > Current

Displays the current location, date, a kite flying advice message, current conditions, and temperature.

### Views > Forecast
Repeats the location and current conditions along with high and low temperatures for the day. Along the bottom is the 5 day forecast.

----------------

## Hooks
<a id="hooks"> </a>

### api
Retrieves data from api at www.openweather.org. Utilizes user geolocation for latitude and longitude but also has the flexibility to use user inputted zip code. 

A copy of this data can be found in `assets > offlinedata.json`

### date
Returns a readable date string for the current day. 

Example: "Tuesday, June 21, 2021"

### geolocation
Retrieves the users' geolocation from their browsers navigator. This data is stored in a context provider and used in the api hook to retrieve weather data.  

**Note:** Users can block this in modern browsers, for this reason a default location is provided and a zip code input override will be added in a future update. 

**TODO:** This is structred differently in mobile browsers and will need to be updated accordingly.

### message
Returns advice on whether or not the user should fly a kite in the current weather conditions. The logic is based around the ideal flying conditions of no rain, temperate weather (above freezing), and wind speeds of 5-25mph. 

It also includes a warning about high speed wind gusts if higher than 25mph.


-----------------
## Providers
<a id="providers"> </a>

### AppData

The context provider stores data and allows access from any component or hook within the application. An initial state is hydrated on load. Some of the methods in this context provider can be updated by user interaction where noted. 

Contains actions for: 
* SET_LOCATION
	* Updates location (zip code) on user interaction
* SET_COORDS
	* Updates latitude and longitude from browser navigator
* SET_WEATHER
	* Sets weather data as recieved from the api hook
* SET_FORECAST
	* Sets forecast data as recieved from the api hook
* SET_VIEW (deprecated)
	* Sets the applications view on user interaction (not in use anymore but retained for possible future updates)


-----------------

## UI Notes
<a id="ui"> </a>
There is a toggle at the top of the screen to switch between light, dark, and colorful modes.

In 'colorful' the background gradient updates depending on the current temperature. 


------------

## Getting Started with Create React App
<a id="cra"> </a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To learn React, check out the [React documentation](https://reactjs.org/).
