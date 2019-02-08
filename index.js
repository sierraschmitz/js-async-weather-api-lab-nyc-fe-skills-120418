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
  fetch('http://apt.openweathermap.org/date/2.5/weather?q=' + city +'&APPID=' + API_KEY + '&units=imperial')
  .then((response) => response.json())
  .then((json) => displayCurrentWeather(json))
  
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  //update our html
  const tableCell = document.querySelector('#temp')
  const highCell = document.querySelector('#low')
  const lowCell = document.querySelector('#high')
  const humidityCell = document.querySelector('#humidty')
  const cloudCell = document.querySelector('#cloudcover')
  tableCell.innerHTML = currentTemperature
  lowCell.innerHTML =json.main.temp
  highCell.innerHTML =json.main.temp_max
  humidtyCEll.innterHTML = json.main.humidty
  clouldCell.innerHTML = json.clouds.all
  const currentTemperature =json.main.temp
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(http://api.openweathermap.org/data/2.5/forcast?q=' + city + &APPID=' + API_KEY + '&units=imperial')
  .then(response => response.json())
  .then(json => displayFiveDayForecast(json))
  for (let forecast of json.list)
  displayFiveDayForecast
  createChart(json)
}

function displayFiveDayForecast(json) {
  //bonus render five day forecast data to the DOM using provided IDs and json from API
  console.log(json)
  
  "<div> <p> day </p>low</p> </p>high</p> </div>"
  let innerHTMLString
for (let forecast of json.list) {
  //3 things we want the day we want the low, and the
  let currentDivString -'<div>'
  const day = forecast.dt_text
  const low = forecast.main.temp_min
  const high = forecast.main.temp_max
  currentDivString = currentDivString = + "<p>" + day + '</p>' + '<p>' + low + '</p>' + high + '</p>' +</div>
  innerHTMLString = innerHTMLString + currentDivString
  
  
  // put this in a div 
  // const div = document.createElement 
}
const aside = document.querySelector('aside')
aside.innerHTML = innerHTMlString
}


function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
  
  const ctx = document.getElementById('WeatherChart').getContext('2d')
  const dateLabels = json.list.map((forecast) => forecast.dt_text
  const data = json.list.map((forecast) => forecastmain.temp
  var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
</script>

  
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.addEventListener('submit)',handleFormSubmit)
})
