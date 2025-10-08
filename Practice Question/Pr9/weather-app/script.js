const button = document.querySelector("#search-button");
const input = document.getElementById("cityname");

let cityName = document.getElementById("cityName");
let cityTime = document.getElementById("cityTime");
let cityTemp = document.getElementById("cityTemp");

async function getData(cityName) {
  let promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=8187652ff5d34a8283a123118250810&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c}`;
});

// Also here after wriitng the city name when we press enter in keyboard it will show us the
