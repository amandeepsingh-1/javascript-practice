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

// Object.freeze(user); // Object is freezed, so after this no changes will update in object.

user.greeting = function() { // Function is declared in object.
    console.log('Hello User!');
}
console.log(user['greeting']());