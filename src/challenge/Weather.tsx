import React, {useState, useEffect} from 'react';
import GeoLocation from './GeoLocation'



function Weather() {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8f0eb5852d755da347226e497f33dbd5`

    useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json)
    })
    }, [url])




    return (
        <div>
            <GeoLocation lat={lat} long={long} />
        </div>
    )
}

export default Weather