// used API:  https://weatherapi-com.p.rapidapi.com/current.json?q=Gdansk

//get input
const input = document.getElementById('cityInput');

//get output elements
const currentCity = document.getElementById('currentCity');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const pic = document.getElementById('image');

//fetch options
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        'X-RapidAPI-Key': 'cb30f6b1abmsh4f8e050a455d139p159f06jsn95c546a1f414'
    }
};

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchButton").click();
    }
});

async function getData() {
    //zbierz miasto z inputu

    //pobierz dane z API
    const weatherData = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${input.value}`, options)
        .then(response => response.json());
    console.log(weatherData);

    //alternatywnie
    //fetch('', options)
    //.then(response => response.json)
    //.then(data => {
    //return data
    //})

    //pokaż miasto, państwo, temperaturę i opis
    currentCity.innerHTML = `City: ${weatherData.location.name},  ${weatherData.location.country}`;
    temperature.innerHTML = `Temperature: ${weatherData.current.temp_c}&#8451`;
    description.innerHTML = `${weatherData.current.condition.text}`;


    //kolorek
    if (weatherData.current.temp_c > 15) {
        temperature.style.color = 'rgb(171, 43, 43)', 5000
    } else {
        temperature.style.color = 'rgb(31, 59, 99)', 5000
    }

    //adding icon
    console.log(weatherData.current.condition.icon);
    pic.src = weatherData.current.condition.icon;
}