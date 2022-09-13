const [distanciaPercorrida, combustivelGasto] = input.split("\n");

const consumoMedio = distanciaPercorrida / combustivelGasto;

console.log(consumoMedio.toFixed(3) + "km/1");

// var input = require('fs').readFileSync('/dev/stdin', 'utf8'); var lines = input.split('\n');

// var X = parseInt(lines.shift()); var Y = parseFloat(lines.shift());

// total = X / Y;

// console.log(total.toFixed(3) + " km/l");