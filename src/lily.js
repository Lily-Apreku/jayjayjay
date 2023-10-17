// Sample weather data for cities
const weatherData = {
  Paris: { temperature: 19, humidity: 80 },
  London: { temperature: 15, humidity: 75 },
  NewYork: { temperature: 22, humidity: 65 },
  Tokyo: { temperature: 27, humidity: 70 }
};

// Prompt the user to enter a city
const city = prompt("Enter a city");

if (city in weatherData) {
  // City exists in the data
  const cityData = weatherData[city];
  const temperatureCelsius = Math.round(cityData.temperature);
  const temperatureFahrenheit = Math.round((cityData.temperature * 9) / 5 + 32);
  const humidity = Math.round(cityData.humidity);

  alert(
    `It is currently ${temperatureCelsius}°C (${temperatureFahrenheit}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  // City does not exist in the data
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
