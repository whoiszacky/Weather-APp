const currentDate = new Date();
const dateOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
document.getElementById('currentDate').textContent = formattedDate;

//THE VISABLE SCREEN , ANY LESS 2100PX IS DISPLAY NONE 
function hideElementOnSmallScreens() {
    const bodyElement = document.body;
    if (window.innerWidth < 2100) {
      bodyElement.style.display = "none";
      alert("Your screen resolution is less than 2100px. You may not be able to view this website properly.");
    } else {
      bodyElement.style.display = "block"; // or whatever the default value is
    }
  }
  
  // Call the function once on load
  hideElementOnSmallScreens();
  
  // And also add an event listener to run it whenever the screen size changes
  window.addEventListener("resize", hideElementOnSmallScreens);

 /* const inputElement = document.querySelector("#inputId");
  let inputArvo = inputElement.value;
  console.log(inputArvo);*/

import {API_KEY} from "./info.js";

// console.log(API_KEY)  // use console.log () to make sure the api is imported 
let currentCity = "lahti";

async function getWeatherStatus() {


  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${currentCity}&aqi=no`);
  const result = await response.json();

  const placeName = result.location.name;
  document.getElementById("city").innerHTML = placeName;

  const temperatureCelsius = result.current.temp_c;
  document.getElementById("temp").innerHTML = `${temperatureCelsius} <sup>&#8451;</sup>`;

  const weatherIconUrl = "http:" + result.current.condition.icon;
  document.getElementById("weatherIcon").src = weatherIconUrl;

  const conditionText = result.current.condition.text;
  document.getElementById("condition").innerHTML = conditionText;
}

getWeatherStatus();