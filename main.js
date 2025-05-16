/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.querySelector("#btn");
// const inputValue = Number(document.querySelector("#input").value);
const inputEl = document.querySelector("#input");
const lengthEl = document.querySelector("#length");
const volumeEl = document.querySelector("#volume");
const massEl = document.querySelector("#mass");


btn.addEventListener("click", () => {
    const inputValue = Number(inputEl.value);

    if (isNaN(inputValue) || inputValue === 0) {
        alert("Please enter a valid number.");
        return;
    }

    lengthEl.textContent = length(inputValue);
    volumeEl.textContent = volume(inputValue);
    massEl.textContent = mass(inputValue);

    // Clear the input field after conversion (optional)
    inputEl.value = "";
});

function length(param) {
    let feet =  param * 3.281;
    let meters = param / 3.281;
    return `${param} meters = ${feet.toFixed(3)} feet | ${param} feet = ${meters.toFixed(3)} meters`;
}

function volume(param) {
    let gallons = param * 0.264;
    let liters = param / 0.264;
    return `${param} liters = ${gallons.toFixed(3)} gallons | ${param} gallons = ${liters.toFixed(3)} liters`;
}

function mass(param) {
    let pounds = param * 2.204;
    let kilograms = param / 2.204;
    return `${param} kilograms = ${pounds.toFixed(3)} pounds | ${param} pounds = ${kilograms.toFixed(3)} kilograms`;
}