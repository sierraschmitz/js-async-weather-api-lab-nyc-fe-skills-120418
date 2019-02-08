const API_KEY = "4b932834402c3bc9cc23d6c2fc06d63b"

// 1. We need an event listener for the input box ('submit')
// 2. Get what they types in, and then fetch data from the weather APT for that city
// 3. Fill out the forecast/graph

function handleFormSubmit(event) {
  //handle submit event
  event.preventDefault()
  // Get the text that they typed in
  const input = document.querySelector('#city')
  // use the .value
  const whatTheyTyped = input.value
  fetchCurrentWeather(whatTheyTyped)
  fetchFiveDayForecast(whatTheyTyped)
  
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  //query parameter
  fetch('http://apt.openweathermap.org/date/2.5/weather?q=' + city)
  
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.addEventListener('submit)',handleFormSubmit)
})
