const prompt = require('prompt-sync')();
let string1 = prompt("Ingresa el primer string: ");
let string2 = prompt("Ingresa el segundo string: ");
let sonIguales = string1 === string2;
let mismaLongitud = string1.length === string2.length;
console.log("Los strings son iguales: " + sonIguales);
console.log("Los strings tienen la misma longitud: " + mismaLongitud);
