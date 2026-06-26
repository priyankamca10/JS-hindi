//Data types are categorized into two types

//1. Primitive data type

//String, Number, Boolean , null, undefined, symbol, BigInt

const someString = "Primitive DT";
const someNum = 44.3;
const isLoggedIn = true;
const temp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 3456788394849n;

//2.Non Primitive data type (reference type)

//Arrays, Objects, Functions

const heros = ["Shaktiman","Doga"];

const myObjects= {
    name : "Priyanka",
    age : 23,
}
console.log(typeof myObjects);

const myFunction = function(){
    console.log("Hello My Function");
}

//+++++++++++++++++++++++++++++++++++++++++++

// Two types of memory - Stack (primitive data types) & Heap (Non-primitive Data types)

let myYoutubeName = "Priyankadubey4610" //stack example
let anotherName = myYoutubeName

anotherName = "Priyad";  // Stack me hum value ka copy dete hai so if change kr reh toh copy wale changes aayenge but original same rahega
console.log(myYoutubeName);
console.log(anotherName);

//Heap example

let userOne ={ 
    userEmail : "user@google.com",
    upiId : "Userybl"
}

let userTwo = userOne;
userTwo.userEmail = "riya@google.com" // heap memory me value ka reference dete haiii toh if changes krr rehhh toh original pr bhi effect hota hai..

console.log(userOne.userEmail);
console.log(userTwo.userEmail);

