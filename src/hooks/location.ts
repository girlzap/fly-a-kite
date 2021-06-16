const useLocation = (): Function => {

    const setPosition = (position: any) => {
        let positionData = {
          'lat': Math.round(position.coords.latitude),
          'long': Math.round(position.coords.longitude)
        }
        return positionData
        // setUserLocation(positionData);
        // setInitState(true);
      }

    const userLocation = () =>{
        let latitude = 0
        let longitude

        navigator.geolocation.getCurrentPosition(function(position) {

             latitude = position.coords.latitude;
             longitude = position.coords.longitude;
           console.log(position.coords.latitude)
        });

        return latitude
        
    }
    
    return userLocation
}

export default useLocation