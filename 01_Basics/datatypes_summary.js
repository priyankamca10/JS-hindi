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