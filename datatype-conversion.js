let score = "18";
let valinNumber = Number(score);
// console.log(typeof (valinNumber)); // String converted into Number.

// Data Type Conversion into Number:-
// 1.) "33":- 33(Number);
// 2.) "33abc":- Nan(Not a Number);
// 3.) true:- 1, false:- 0;

let isLoggedIn = 1;
let isBooleanLogged = Boolean(isLoggedIn);
// console.log(typeof (isBooleanLogged));

// Data Type Conversion into Boolean:-
// 1.) 1:- True
// 2.) 0:- False
// 3.) " ": - False
// 4.) "Aman":- True

let rollNum = 18;
let strNum = String(rollNum);
// console.log(typeof (strNum));

/* Operations Start Here */

// Convert Positive to Negative Value
let value = 4;
let negVal = -value;
// console.log(negVal);

// String Concatenation
let str1 = "Amandeep";
let str2 = " Singh";
let combinedStr = str1 + str2;
console.log(str1 + str2);