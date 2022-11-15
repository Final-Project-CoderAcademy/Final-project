import React, {useEffect} from 'react'
import {Container} from 'react-bootstrap'
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMapSite = (props) => {
    const {lat, lng} = props
    const loader = new Loader({
        apiKey: "AIzaSyAI1thVh0FcREXtm-2zfheIoU9yBTNBZbE",
        libraries: ["places"]
    });

    const mapOptions = {
        center: {
            lat: parseFloat(lat), 
            lng: parseFloat(lng)
        },
        zoom: 15
    };

      useEffect(() => {
        loader
        .load()
        .then((google) => {
            new google.maps.Map(document.getElementById("map"), mapOptions);
        })
        .catch(e => {
          console.log(e.message)
        });
        // eslint-disable-next-line 
      }, [mapOptions])
  return (
    
        <div id="map" style={{margin:"auto", width:"800px", height:"600px"}}></div>
    
  )
}

export default GoogleMapSite