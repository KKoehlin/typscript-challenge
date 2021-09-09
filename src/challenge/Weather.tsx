import React from 'react';
import GeoLocation from './GeoLocation'



const Weather = () => {
    const url = `api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=8f0eb5852d755da347226e497f33dbd5`;

    async fetch(url)



    return (
        <div>
            <GeoLocation lat={lat} long={long} />
        </div>
    )
}

export default Weather