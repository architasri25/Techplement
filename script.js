const cityElement = document.getElementById('cityName');
const searchInput = document.getElementById('searchInput');
let currentCity = 'New York'; // Default city

document.getElementById('searchButton').addEventListener('click', () => {
    const city = searchInput.value.trim(); // Get the trimmed city name from input
    if (city !== '') {
        currentCity = city; // Update current city if a valid city name is entered
    }
    displayWeather(currentCity); // Display weather for the current city
});

function displayWeather(city) {
    // Simulated weather data (you can adjust this as needed)
    const weatherData = {
        temperature: '20°C', // Static temperature example
        description: 'Partly cloudy' // Example weather description
    };

    // Update DOM with simulated weather data
    cityElement.textContent = city; // Display city name
    document.querySelector('.temperature').textContent = weatherData.temperature;
    document.querySelector('.weather-description').textContent = weatherData.description;
}

// Initial display with default city
displayWeather(currentCity);
