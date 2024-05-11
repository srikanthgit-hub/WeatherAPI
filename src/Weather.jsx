import { useState } from "react"
import axios from "axios"
function Weather() {
    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    function handleCity(event) {
        setcity(event.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a8d0c6095c3ec20d5c0368487484420`)
        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
    }

    return (
        <div style={{ backgroundColor: "black", padding: "12%" }}>
            <div style={{ backgroundColor: "aqua", padding: "5%", borderRadius: "10px" }}>
                <h1>Weather Report</h1>
                <p >I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" placeholder="Enter your City Name" style={{ padding: "1%", marginTop: "15px", outline: "none", border: "black solid 1px", borderRadius: "5px" }}></input><br></br>
                <button onClick={getWeather} style={{ marginTop: "2%", backgroundColor: "black", color: "white", padding: "4px", borderRadius: "5px" }}> Get report</button>
                <div>
                    <h3><b>Weather:</b>{weather}</h3>
                    <p><b>Temperature:</b>{temp}</p>
                    <p><b>Description:</b>{desc}</p>
                </div>
            </div>
        </div>
    )
}
export default Weather