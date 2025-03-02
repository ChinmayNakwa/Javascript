
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {

    if(toFahrenheit.checked) {
        result.textContent = `Select a unit`;
    } else if (toCelsius.checked) {
        result.textContent = `Select a unit`;
    } else {
        result.textContent = `Select a unit`;
    }
}