const temperatureHTML = document.querySelector(".temperature");
const latitudeHTML = document.querySelector(".latitude");
const longitudeHTML = document.querySelector(".longitude");
const cityNameHTML = document.querySelector(".location_name");

let latitude = latitudeHTML.value;
let longitude = longitudeHTML.value;

latitudeHTML.addEventListener("input",loadWeather);
longitudeHTML.addEventListener("input",loadWeather);

function loadWeather(){
    console.log("Loading weather...");
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAgcXImm3nXyjSTLWJHwcT6t_gNmIv0CNA`;
            console.log(position);
            fetch(url) 
            .then((response) => response.json())
            .then((data) => {
                // Parse the city name from the API response
                console.log(data.results);
                const city = data.results[0].address_components.find((component) =>
                component.types.includes("locality")
                ).long_name;
                
                console.log(`Your city is ${city}.`);
                cityNameHTML.innerText = city;
            }).catch((error) => console.log(error));
        },()=>{},{enableHighAccuracy : true});

        
      
    }
    else{
        console.warn("API Geolocation disable, impossible to define where the user is.");
    }
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`)
    .then(response=>{
        if(response.ok)
            return response.json();
        else
            throw Error("Error server hile requesting the meteo API");
    })
    .then(data=>{
        const currentHour = (new Date()).getHours();
        const temperature = data.hourly.temperature_2m[currentHour];
        console.log(temperature);
        temperatureHTML.innerText = temperature+"°C";
    })
    .catch(err=>console.error(err));
}

loadWeather();