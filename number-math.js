/* Numbers Concept */

let score = 18;
// console.log(score);

let balance = new Number(27); // With new keyword Object is Defined and by Number it's type number is declared.
// console.log(balance);
// console.log(typeof (balance.toString())); // Number type is changed to String.

let preciseVal = 1.8;
// console.log(preciseVal.toFixed()); // toFixed() is used to convert the decimal value into round of value.

let avg = 18.98127;
// console.log(avg.toPrecision(4)); // toPrecision() is used to return the upto value, like 4.

let hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN')); // toLocaleString() is used to return the value as per currency format, like Indian Currency.

/* Maths Concept */

// console.log(Math); // Math is a Object.
// console.log(Math.abs(-4)); // By Math.abs() negative value converts into positive value.
// console.log(Math.round(18.8)); // By Math.round(), decimal value converts into round of value.
// console.log(Math.ceil(18.1)); // By Math.ceil(), decimal value converts into upper value.
// console.log(Math.floor(18.9)); // By Math.floor(), decimal value converts into bottom value.
// console.log(Math.min(4,3,6,8)); // By Math.min(), lowest value returns.
// console.log(Math.max(4,3,6,8)); // By Math.max(), bigger value returns.
// console.log(Math.random()); // By Math.random(), it always return in between 0 to 1.
// console.log((Math.random()*10) + 1); // By Math.random()*10+1, value not return in the form of 0point.

let minVal = 10;
let maxVal = 20;
console.log(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)); // By Math.floor(), it converts the value to roundof and by Math.random() value returns within 0 to 1. So now it returns between Max Value and Min Value.