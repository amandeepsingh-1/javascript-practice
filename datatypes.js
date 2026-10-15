"use strict"; // Treat all JS Code as newer version

// Data Types:-
/*1.) Primitive Datatypes: - It provides copy that means changes not apply in original value as changes will apply in it's copy.
2.) Non Primitive Datatypes: -  */

// 1.) Primitive Data types:- String, Number, Boolean, Null, Undefinied, Bigint, Symbol.
console.log(typeof "Amandeep Singh"); // Typeof to check data type of value.
console.log(typeof null); // Null type is a Object.
console.log(typeof undefined); // Undefined type is a Undefined.
console.log(typeof 100); // 100 type is Number.
console.log(typeof true); // true type is Boolean.

let id = Symbol('18');
console.log(id); // Symbol type is Symbol(18). Symbol use to make values unique.

let bigNum = 1234567890n;
console.log(typeof bigNum); // 1234567890n type is bigint.


// 2.) Non Primitive Data types:- Array, Object, Functions
const cars = ["Maruti", "Indica", "Alto", "Innova"];
console.log(cars);
console.log(typeof (cars)); // Type is Object.


let studentDetail= {
    name: 'Amandeep Singh',
    rollno: '18'
}
console.log(studentDetail);
console.log(typeof (studentDetail)); // Type is Object.

let hello = function() {
    console.log('Hello World!');
}
hello();
console.log(typeof (hello)); // Type is Function Object.

// Memory: Memory are of two types:-
// 1.) Stack Memory:- Used in Primitive Data Types. Changes do in Reference not in Original Values.
// 2.) Heap Memory:- Used in Non-Primitive Data Types. Changes do in Original Values.