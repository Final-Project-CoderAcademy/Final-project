import React, {useState, useEffect} from 'react'
// import dotenv from 'dotenv'
import { Container, Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Loader } from '@googlemaps/js-api-loader';


const WeatherSearchBar = () => {
    // dotenv.config()
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("");
    const loader = new Loader({
        apiKey: "AIzaSyAI1thVh0FcREXtm-2zfheIoU9yBTNBZbE",
        libraries: ["places"]
    });

    const showWeather = async (lat, lng) => {
      const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1bdac9b23bd412c0b4695b226bf7a4c6`
      await fetch(weatherAPI)
        .then(response => response.json())
        .then(data => {
          setWeather(data.weather[0].main)
          })
        .catch(err => console.log(err))
  }

    const initAutocomplete = (x) => {
        const input = document.getElementById("searchbar");
        const autocomplete = new x.maps.places.Autocomplete(input);
        setCity(input.value)
        
        autocomplete.addListener('place_changed', () => {
          const {lat, lng} = autocomplete.getPlace().geometry.location
          showWeather(lat(), lng())
          })
      }

    useEffect(() => {
        loader
        .load()
        .then((google) => {
          initAutocomplete(google)
        })
        .catch(e => {
          console.log(e.message)
        });
    }, [city, weather])

  return (
    <Container>
        <Form className="d-flex align-items-center justify-content-center mt-4 mb-3">
        <Form.Control
            id="searchbar"
            type="string"
            placeholder="Enter the city for checking the weather"
            style={{ width: 300 }}
        />
        </Form>
        <div className="d-flex align-items-center justify-content-center text-center">
          <Col className="col-sm-5 mb-3" md="auto">
            <Row className="d-flex justify-content-center">
              {city}
            </Row>
            <Row className="d-flex justify-content-center">
              <strong>{weather}</strong>
            </Row>
            <Row className="d-flex justify-content-center" style={{fontSize:"40px", }}>
              {weather.toLowerCase().includes("cloud") && "⛅"}
              {weather.toLowerCase().includes("rain") && "🌧️"}
              {weather.toLowerCase().includes("snow") && "❄️"}
              {weather.toLowerCase().includes("clear") && "🌞"}
            </Row>
          </Col>

        
        </div>
  </Container>
  )
}

export default WeatherSearchBar