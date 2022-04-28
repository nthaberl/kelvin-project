// const kelvin = 293;
const kelvin = 0;
//the value of kelvin, which will stay constant

const celsius = kelvin - 273;
//converts kelvin into celsius, we will not change this variable

let fahrenheit = celsius * (9/5) + 32;
//converts celsius into fahrenheit, we will be changing this value so declare it with 'let' keyword

fahrenheit = Math.floor(fahrenheit);
//since you often get a decimal converting celsius to fahrenheit we are going to round down

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

/* Bonus Round */

let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
