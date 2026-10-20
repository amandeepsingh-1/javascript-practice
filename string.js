let userName = 'Amandeep Singh';
let userId = 18;
// console.log(`Hello Username is ${userName} and User Id is ${18}.`); // Console Log using String Interpolation.

let courseName = 'React Js';
// console.log(courseName[0]); // Console Log: - Index of string.

// console.log(courseName.length); // Length of a String.
// console.log(courseName.toUpperCase()); // Convert String to Uppercase.
// console.log(courseName.charAt('2')); // On Index, which alphabet is placed.
// console.log(courseName.indexOf('R')); // Which Alphabet is placed on which Index.

let course = courseName.substring(0,4);
// console.log(course); // In Substring, string is divided.

let name = 'Amandeep'
let nickname = name.slice(-8, 1);
// console.log(nickname); // In Slice, string is divided by passing negative values.

let designation = '    Software Developer    ';
// console.log(designation.trim()); // By using trim(), whitespace is removed.

let url = "https://amandeep%20singh.com";
// console.log(url.replace('%20', '-')); // By using replace(), we replace the word in string.
// console.log(url.includes('aman')); // By using includes(), we find the word in a string.

let dummyText = 'Lorem ipsum dolor sit amet.';
// console.log(dummyText.split(' ')); // Passing a space '', separates the string at every word gap.
