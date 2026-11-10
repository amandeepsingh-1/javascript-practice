let arrNum = [1, 2, 3, 4];
// console.log(arrNum[1]); // Access Index Value of Array.

let arrVal = new Array(1, 2, 3, 4); // Also way to access array.
// console.log(arrVal[0]);
// console.log(typeof arrVal); // Type of Array is Object.

// Array Methods
let arrDigits = [1, 2, 3, 4];
arrDigits.push(5); // By push(), add number in the last in Array.
// console.log(arrDigits);

arrDigits.pop(); // By pop(), value deleted from the last in Array.
// console.log(arrDigits);

arrDigits.unshift(9); // By unshift(), add value in the first in Array.
// console.log(arrDigits);

arrDigits.shift() // By shift(), delete value from the first in Array.
// console.log(arrDigits);

// console.log(arrDigits.includes(7)); // By includes(), it checks the value exists or not and the answer comes in Boolean.

// console.log(arrDigits.indexOf(1)); // By indexOf(), it checks the index position of the given value in the Array, if the value not exists the output will be -1.

let combineArr = arrDigits.join(); // join() converts the array in string.
// console.log(arrDigits);
// console.log(combineArr);

let sliceArr = arrDigits.slice(1, 3); // slice() will work from 1st argument and from 2nd argument it not print.
// console.log("Original Array:-", arrDigits);
// console.log("After Slice Array: -", sliceArr);

// console.log("Original Array:-", arrDigits);

let spliceArr = arrDigits.splice(1, 3) // splice() will print from 1st argument to 2nd argument.
// console.log("Splice Array:-", spliceArr);

const courseName = ['React Js', 'Angular'];
const desg = ['Web Designer', 'Full Stack Developer']
const mergeArr = courseName.concat(desg);
// console.log(mergeArr); // By concat(), it combines both arrays.

const spreadArr = [...courseName, ...desg]
// console.log(mergeArr); // By spread operator(...), it combines both arrays.

const flatArr = [1, 2, [3, 4, [5, 6, 7]]];
const flatNewArr = flatArr.flat(2); // By the use of flat(2) method, it provides new array upto the depth, which number sets in it.
// console.log(flatNewArr);

const fromArr = Array.from('Amandeep Singh'); // By from() method it converts the given type in Array.
// console.log(fromArr);
