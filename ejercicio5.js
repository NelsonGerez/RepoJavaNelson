const prompt = require('prompt-sync')();
let fahrenheit = prompt("Ingrese la temperatura en grados Fahrenheit: ");
fahrenheit = parseFloat(fahrenheit);
function fahrenheitACelsius(f) {
    return (f - 32) * 5 / 9;
}
let celsius = fahrenheitACelsius(fahrenheit);
console.log("La temperatura en grados Celsius es: " + celsius);