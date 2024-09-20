// API key from OpenWeatherMap (replace with your actual key)
const apiKey = "ebc0be6b920cb2a0c3ff7f53c9e2ded9"//'YOUR_API_KEY';

// Select elements from the DOM
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

// Function to fetch weather data
async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.cod === 200) {
            // Extract relevant weather data
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            const name = data.name;
            
            // Update the DOM with weather info
            cityName.innerText = `Weather in ${name}`;
            temperature.innerText = `Temperature: ${temp}°C`;
            description.innerText = `Description: ${desc}`;
        } else {
            cityName.innerText = 'City not found. Please try again.';
            temperature.innerText = '';
            description.innerText = '';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Add event listener to the search button
searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});
