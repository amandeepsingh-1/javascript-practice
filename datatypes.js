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