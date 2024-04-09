console.log("...Weather Application...");

const locationInput = document.getElementById("location-input");
const locationButton = document.getElementById("location-button");
const temperatureDiv = document.getElementById("temperature");
const tableContainer = document.getElementById("table-container");

locationButton.addEventListener("click", fetchWeather);

function fetchWeather() {
    const location = locationInput.value.trim();

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=HHF73PNR4YE3THCLV8D3GNAZU`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            renderUI(data);
        })


}


function renderUI(data) {
    temperatureDiv.innerHTML = "";


    const days = data.days;

    const table = document.createElement("table");

    const row = document.createElement("tr");
    const cell1 = document.createElement("th");
    cell1.innerText = 'Date';
    row.appendChild(cell1);

    const cell2 = document.createElement("th");
    cell2.innerText = 'Maximum Temperature (°C)';
    row.appendChild(cell2);

    const cell3 = document.createElement("th");
    cell3.innerText = 'Minimum Temperature (°C)';
    row.appendChild(cell3);

    table.appendChild(row);

    days.forEach(day => {
        const newRow = document.createElement("tr");

        const newCell1 = document.createElement("td");
        newCell1.innerText = day.datetime;
        newRow.appendChild(newCell1);

        const newCell2 = document.createElement("td");
        newCell2.innerText = fahrenheitToCelsius(day.tempmax);
        newRow.appendChild(newCell2);

        const newCell3 = document.createElement("td");
        newCell3.innerText = fahrenheitToCelsius(day.tempmin);
        newRow.appendChild(newCell3);

        table.appendChild(newRow);
    });

    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);

    const currentTemp = days[0].tempmax;
    temperatureDiv.innerText = `Current Temperature: ${fahrenheitToCelsius(currentTemp)}°C`;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9).toFixed(2);
}

fetchWeather();