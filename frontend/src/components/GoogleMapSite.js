import React, {useEffect} from 'react'
import { Loader } from "@googlemaps/js-api-loader";
import {Container} from "react-bootstrap";

const GoogleMapSite = (props) => {
  // use the googlemap apiKey and set the places library
    const {lat, lng} = props
    const loader = new Loader({
        apiKey: "AIzaSyAI1thVh0FcREXtm-2zfheIoU9yBTNBZbE",
        libraries: ["places"]
    });
  // set the lng and lat which will be passed from props for a place, and then the zoom is 15 
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
    
        <Container id="map" style={{ margin:"auto 0", height:"60vh"}}></Container>
    
  )
}

export default GoogleMapSite