const userSym = Symbol('Key'); // Symbol is Defined.

const user = {
    name: 'Amandeep Singh',
    'nick name': 'Aman',
    email: 'amandeepsingh@test.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Tuesday'],
    [userSym]: 'Key 2' // Symbol is Defined here as Key.
}
// console.log(user.name);
// console.log(user['email']); // Better way to print object.
// console.log(user['nick name']); // To print a string key in object.
// console.log(user[userSym]);

user.email = 'amandeep@test.com'; // Email is changed in object.
// console.log(user['email']);

// console.log(Object.keys(user)); // By Object.keys(), we get only keys.
// console.log(Object.values(user)); // By Object.values(), we get only values.
// console.log(Object.entries(user)); // By Object.entries(), it convert key value into Array. So first property is key and second one is value.

// Object.freeze(user); // Object is freezed, so after this no changes will update in object.

user.greeting = function() { // Function is declared in object.
    console.log('Hello User!');
}
// console.log(user['greeting']());

// Single Ton Object
const studentDetail = new Object(); // Declared as Single Ton Object.
studentDetail.id = '18',
studentDetail.name = 'Amandeep Singh',
studentDetail.loggedIn = false
// console.log(studentDetail);

// Multiple Objects in a Single Object
const regularUser = {
    email: 'test@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'Amandeep',
            lastname: 'Singh'
        }
    }
}
// console.log(regularUser['fullname']['userfullname']['firstname']);

// Merge Two Objects
const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
// const mergeObj = Object.assign(obj1, obj2);
// console.log(mergeObj);

// Spread Operator
const spreadObj = {...obj1, ...obj2};
// console.log(spreadObj);

// Array Object
const userInfo = [
    {
        id: 1,
        name: 'Amandeep Singh'
    },
    {
        id: 2,
        name: 'Guest User'
    }
]
console.log(userInfo);