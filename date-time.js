// Dates
let todayDate = new Date();
// console.log(todayDate);
// console.log(typeof (todayDate)); // Type of Date is Object.

// Date Converted into String.
let strDate = todayDate;
// console.log(strDate.toString());

// Date Converted into toDate String.
let dateStr = todayDate;
// console.log(dateStr.toDateString());

let createdDate = new Date(2026, 10, 2); // Year, Month, Date
// console.log(createdDate.toDateString());
// console.log(createdDate.toLocaleString()); // Date converted into Locale String.

let modifyDate = new Date("11-02-2026"); // Date mentioned into mm-dd-yy.
// console.log(modifyDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp); // Time in milliseconds.
// console.log(Math.floor (Date.now()/1000)); // Short Time for comparison, so Math.floor() is used.

let presentDate = new Date();
// console.log(presentDate.getMonth()); // By getMonth(), Month shows in the terminal. First Month starts from 0.
// console.log(presentDate.getDay()); // By getDay(), Day shows in the terminal. Monday Month starts from 1.

let formatDate = presentDate.toLocaleString('default', {
    weekday: 'long'
});
console.log(formatDate); // Format Date.
