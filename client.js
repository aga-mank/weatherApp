// used API:  https://goweather.herokuapp.com/weather/Gdansk

function searchTemperature (){
    const city = document.getElementById('cityInput').value;
    document.getElementById('currentCity').innerHTML = `City: ${city}`;
    console.log(city)
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
    .then(response => response.json())
    .then(res => document.getElementById('temperature').innerHTML = `Temperature: ${res.temperature}`)
}   