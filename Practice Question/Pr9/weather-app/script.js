const button = document.querySelector("#search-button");
const input = document.getElementById("cityName");
async function getData(cityName) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=8187652ff5d34a8283a123118250810&q=${cityName}&aqi=yes`
  );
}

button.addEventListener("click", () => {
  console.log(input.value);
});
