import React from 'react'; 

type GeoLocationState = {
    lat: number,
    long: number
}

 export default class GeoLocation extends React.Component<{}, GeoLocationState> {
     constructor(props: {}){
         super(props)
         this.state = {
        lat: 0,
        long: 0
     }
    }

     componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
           (position) => {
              
              this.setState({ 
                  lat: position.coords.latitude,
                  long: position.coords.longitude
              });
           },
           (error) => alert(error.message)
        );
     }

    render(){
        const {lat, long} = this.state
        return(
            <div>
                <p>{lat}, {long}</p>
            </div>
        )
    }
           }